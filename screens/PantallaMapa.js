// Voyapescar/screens/PantallaMapa.js
import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { puntosDePesca as todosLosPuntosOriginales } from '../data/PuntosDePesca';
import LugarDetailsModal from '../components/LugarDetailsModal';
import ModalFiltros from '../components/ModalFiltros';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// --- FUNCIÓN PARA OBTENER EL ÍCONO DEL PIN PERSONALIZADO POR TIPO ---
// La ruta '../imagenes/' es relativa a este archivo (PantallaMapa.js).
// Asegúrate que tus imágenes (pin-lago.png, pin-rio.png, etc.) estén en esa ubicación.
const getIconForPin = (tipo) => {
  try {
    switch (tipo) {
      case 'Lago':
        return require('../imagenes/pin-lago.png');
      case 'Playa':
        return require('../imagenes/pin-playa.png');
      case 'Río': // Si en tus datos usas 'Río' con tilde
        return require('../imagenes/pin-rio.png');
      case 'Rio': // Si en tus datos usas 'Rio' sin tilde
        return require('../imagenes/pin-rio.png');
      case 'Embalse':
        return require('../imagenes/pin-embalse.png');
      case 'Desembocadura':
        return require('../imagenes/pin-desembocadura.png');
      case 'Caleta':
        return require('../imagenes/pin-caleta.png');
      case 'Muelle':
        return require('../imagenes/pin-muelle.png');
      default:
        // Considera tener un pin por defecto si algún tipo no coincide o es nuevo
        // Por ahora, si no hay un pin específico, se podría usar el pinColor rojo por defecto de react-native-maps si se omite la prop 'image'.
        // O puedes crear un 'pin-default.png' y referenciarlo aquí:
        // return require('../imagenes/pin-default.png');
        return null; // Esto hará que se use el pin por defecto de react-native-maps si no se define pinColor
    }
  } catch (error) {
    console.warn(`Error al cargar el ícono para el tipo: ${tipo}. Usando pin por defecto.`, error);
    // return require('../imagenes/pin-default.png'); // Fallback a un pin por defecto si la carga falla
    return null;
  }
};
// --- FIN DE FUNCIÓN PARA ÍCONO ---

// La función getColorForTipo ya no se usará para pinColor en los Markers con imagen,
// pero puede ser útil para otros elementos o si un ícono personalizado no carga.
const getColorForTipo = (tipo) => {
  switch (tipo) {
    case 'Lago': return 'blue';
    case 'Playa': return 'gold';
    case 'Río': return 'green';
    case 'Embalse': return 'aqua';
    case 'Desembocadura': return 'purple';
    case 'Caleta': return 'tomato';
    case 'Muelle': return 'grey';
    default: return 'red';
  }
};


export default function PantallaMapa({ navigation }) {
  const CHILE_BOUNDING_BOX = React.useMemo(() => ([
    { latitude: -17.5, longitude: -78.0 }, 
    { latitude: -56.0, longitude: -65.0 }, 
  ]), []);

  const INITIAL_CHILE_REGION = React.useMemo(() => ({
    latitude: -36.75,
    longitude: -71.5,
    latitudeDelta: 40.0,
    longitudeDelta: 18.0,
  }), []);

  const MIN_MAP_ZOOM_LEVEL = 3.5;
  const MARKER_VISIBILITY_MAX_DELTA = 15.0; 

  const [modalLugarVisible, setModalLugarVisible] = useState(false);
  const [modalFiltrosVisible, setModalFiltrosVisible] = useState(false);
  const [selectedLugar, setSelectedLugar] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  const [filtrosAplicados, setFiltrosAplicados] = useState({ tipo: null, region: null, especie: null });
  const [puntosMostrados, setPuntosMostrados] = useState([]);
  const [opcionesTipo, setOpcionesTipo] = useState([]);
  const [opcionesRegion, setOpcionesRegion] = useState([]);
  const [opcionesEspecie, setOpcionesEspecie] = useState([]);
  const [currentLatitudeDelta, setCurrentLatitudeDelta] = useState(INITIAL_CHILE_REGION.latitudeDelta);

  useEffect(() => {
    if (!Array.isArray(todosLosPuntosOriginales) || todosLosPuntosOriginales.length === 0) {
      console.warn("PantallaMapa: 'todosLosPuntosOriginales' no está disponible o está vacío.");
      setOpcionesTipo(['Todos los Tipos']);
      setOpcionesRegion(['Todas las Regiones']);
      setOpcionesEspecie(['Todas las Especies']);
      setPuntosMostrados([]);
      return;
    }
    const tiposUnicos = [...new Set(todosLosPuntosOriginales.map(p => p.tipo).filter(Boolean))].sort();
    const regionesUnicas = [...new Set(todosLosPuntosOriginales.map(p => p.region).filter(Boolean))].sort();
    const especiesUnicas = [...new Set(todosLosPuntosOriginales.flatMap(p => (p.especies || []).map(e => e.nombreComun).filter(Boolean)))].sort();
    setOpcionesTipo(['Todos los Tipos', ...tiposUnicos]);
    setOpcionesRegion(['Todas las Regiones', ...regionesUnicas]);
    setOpcionesEspecie(['Todas las Especies', ...especiesUnicas]);
    setPuntosMostrados(todosLosPuntosOriginales);
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (!Array.isArray(todosLosPuntosOriginales)) {
        setPuntosMostrados([]);
        return;
    }
    let puntosFiltrados = [...todosLosPuntosOriginales];
    if (filtrosAplicados.tipo) {
      puntosFiltrados = puntosFiltrados.filter(p => p.tipo === filtrosAplicados.tipo);
    }
    if (filtrosAplicados.region) {
      puntosFiltrados = puntosFiltrados.filter(p => p.region === filtrosAplicados.region);
    }
    if (filtrosAplicados.especie) {
      puntosFiltrados = puntosFiltrados.filter(p =>
        (p.especies || []).some(e => e.nombreComun === filtrosAplicados.especie)
      );
    }
    setPuntosMostrados(puntosFiltrados);
  }, [filtrosAplicados, todosLosPuntosOriginales]);

  const handleAplicarFiltrosDesdeModal = (nuevosFiltros) => { setFiltrosAplicados(nuevosFiltros); setModalFiltrosVisible(false);};
  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso Denegado', 'La aplicación necesita acceso a tu ubicación para funcionar correctamente.');
      return false;
    }
    return true;
  };
  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;
    try {
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setUserLocation(location.coords);
    } catch (error) {
      console.warn("Error al obtener ubicación:", error);
    }
  };
  
  const centerMapOnUser = () => { 
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.25,
        longitudeDelta: 0.25 * ASPECT_RATIO, 
      }, 1000);
    } else {
        Alert.alert("Ubicación no disponible", "¿Intentar obtener tu ubicación actual?", [{text: "Cancelar", style: "cancel"},{text: "Sí", onPress: getCurrentLocation}]);
    }
  };

  const fitMapToChileOnReady = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(CHILE_BOUNDING_BOX, {
        edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
        animated: false,
      });
    }
  }, [CHILE_BOUNDING_BOX]);

  const abrirModalDetalles = useCallback(async (lugar) => { 
    if (!lugar || typeof lugar.latitude !== 'number' || typeof lugar.longitude !== 'number') {
        console.error("Datos de lugar inválidos para abrir modal:", lugar);
        Alert.alert("Error", "No se pueden mostrar los detalles para este lugar.");
        return;
    }
    setSelectedLugar(lugar);
    setModalLugarVisible(true);
    setIsLoadingWeather(true);
    setWeatherData(null);

    const openMeteoBaseUrl = 'https://api.open-meteo.com/v1/forecast';
    const params = {
      latitude: lugar.latitude,
      longitude: lugar.longitude,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max',
      timezone: 'America/Santiago', 
      forecast_days: 7
    };
    const queryString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
    const openMeteoURL = `${openMeteoBaseUrl}?${queryString}`;
    console.log("Intentando obtener clima de URL (Open-Meteo):", openMeteoURL);

    try {
      const response = await axios.get(openMeteoURL, { timeout: 10000 });
      setWeatherData(response.data);
    } catch (err) {
      if (err.isAxiosError && !err.response) { 
        console.error('Error de Red (Axios) al obtener clima:', err.message, 'URL:', openMeteoURL);
        Alert.alert("Error de Red", "No se pudo conectar al servicio de clima. Por favor, verifica tu conexión a internet e inténtalo de nuevo.");
      } else { 
        console.error('Error obteniendo clima (Open-Meteo):', err.response ? JSON.stringify(err.response.data) : err.message, 'URL:', openMeteoURL);
        Alert.alert("Error de Clima", "No se pudo obtener la información del clima para este lugar en este momento.");
      }
      setWeatherData(null);
    } finally {
      setIsLoadingWeather(false);
    }
  }, []);
  const cerrarModalDetalles = useCallback(() => { setModalLugarVisible(false);}, []);

  const handleRegionChangeComplete = useCallback((region) => {
    setCurrentLatitudeDelta(region.latitudeDelta);

    let needsCorrection = false;
    const correctedRegion = { ...region };
    const MAX_LAT_DELTA = INITIAL_CHILE_REGION.latitudeDelta;
    const MAX_LON_DELTA = INITIAL_CHILE_REGION.longitudeDelta;

    if (correctedRegion.latitudeDelta > MAX_LAT_DELTA) {
        correctedRegion.latitudeDelta = MAX_LAT_DELTA;
        needsCorrection = true;
    }
    if (correctedRegion.latitudeDelta === MAX_LAT_DELTA && correctedRegion.longitudeDelta > MAX_LON_DELTA) {
        correctedRegion.longitudeDelta = MAX_LON_DELTA;
        needsCorrection = true;
    }

    const latBuffer = correctedRegion.latitudeDelta * 0.20;
    const lonBuffer = correctedRegion.longitudeDelta * 0.20;
    const minAllowedCenterLat = CHILE_BOUNDING_BOX[1].latitude - latBuffer;
    const maxAllowedCenterLat = CHILE_BOUNDING_BOX[0].latitude + latBuffer;
    const minAllowedCenterLon = CHILE_BOUNDING_BOX[0].longitude - lonBuffer;
    const maxAllowedCenterLon = CHILE_BOUNDING_BOX[1].longitude + lonBuffer;

    if (correctedRegion.latitude < minAllowedCenterLat) { correctedRegion.latitude = minAllowedCenterLat; needsCorrection = true; }
    else if (correctedRegion.latitude > maxAllowedCenterLat) { correctedRegion.latitude = maxAllowedCenterLat; needsCorrection = true; }
    if (correctedRegion.longitude < minAllowedCenterLon) { correctedRegion.longitude = minAllowedCenterLon; needsCorrection = true; }
    else if (correctedRegion.longitude > maxAllowedCenterLon) { correctedRegion.longitude = maxAllowedCenterLon; needsCorrection = true; }
    
    if (needsCorrection && mapRef.current) {
        const R_EPSILON = 0.01;
        if (
            Math.abs(region.latitude - correctedRegion.latitude) > R_EPSILON ||
            Math.abs(region.longitude - correctedRegion.longitude) > R_EPSILON ||
            Math.abs(region.latitudeDelta - correctedRegion.latitudeDelta) > R_EPSILON ||
            Math.abs(region.longitudeDelta - correctedRegion.longitudeDelta) > R_EPSILON
        ) {
            mapRef.current.animateToRegion(correctedRegion, 150);
        }
    }
  }, [INITIAL_CHILE_REGION, CHILE_BOUNDING_BOX]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          mapType="hybrid"
          initialRegion={INITIAL_CHILE_REGION}
          showsUserLocation={true}
          showsMyLocationButton={false}
          loadingEnabled={true}
          onMapReady={fitMapToChileOnReady}
          onRegionChangeComplete={handleRegionChangeComplete}
          minZoomLevel={MIN_MAP_ZOOM_LEVEL}
        >
          {Array.isArray(puntosMostrados) && currentLatitudeDelta < MARKER_VISIBILITY_MAX_DELTA && 
            puntosMostrados.map((punto) => {
            if (!punto || typeof punto.latitude !== 'number' || typeof punto.longitude !== 'number') {
              console.warn("Punto de pesca con datos inválidos omitido:", punto);
              return null;
            }
            
            const icon = getIconForPin(punto.tipo); // Obtener el ícono para el tipo

            return (
              <Marker
                key={punto.id ? punto.id.toString() : `marker-${punto.latitude}-${punto.longitude}`}
                coordinate={{ latitude: punto.latitude, longitude: punto.longitude }}
                title={punto.nombre || 'Punto Desconocido'}
                description={punto.tipo || ''}
                onPress={() => abrirModalDetalles(punto)}
                // --- USAR IMAGEN PERSONALIZADA ---
                image={icon} 
                // Si 'icon' es null (porque no se encontró un pin específico y getIconForPin devuelve null),
                // react-native-maps podría usar su pin por defecto. 
                // Si quieres un color específico para el pin por defecto en ese caso, puedes añadir:
                // pinColor={icon ? undefined : getColorForTipo(punto.tipo)} 
                // O, si tu getIconForPin siempre devuelve un require (incluso para un default.png),
                // entonces no necesitas pinColor aquí.
                // --- FIN ---
                tracksViewChanges={false}
              />
            );
          })}
        </MapView>

        <TouchableOpacity style={styles.botonAbrirFiltros} onPress={() => setModalFiltrosVisible(true)}>
          <Ionicons name="options-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton} onPress={centerMapOnUser}>
          <Text style={styles.centerButtonText}>🎯</Text>
        </TouchableOpacity>

        {selectedLugar && (
          <LugarDetailsModal
            visible={modalLugarVisible}
            lugar={selectedLugar}
            weatherData={weatherData}
            isLoading={isLoadingWeather}
            onClose={cerrarModalDetalles}
          />
        )}
        <ModalFiltros
          visible={modalFiltrosVisible}
          onClose={() => setModalFiltrosVisible(false)}
          onAplicarFiltros={handleAplicarFiltrosDesdeModal}
          opcionesTipo={opcionesTipo}
          opcionesRegion={opcionesRegion}
          opcionesEspecie={opcionesEspecie}
          filtrosActuales={filtrosAplicados}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#000000' },
  container: { flex: 1 },
  map: { flex: 1 },
  centerButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 95 : 75,
    right: 20,
    backgroundColor: 'rgba(44, 62, 80, 0.85)',
    padding: 12,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1.5,
    borderColor: '#3498db',
  },
  centerButtonText: { fontSize: 26, color: '#FFFFFF' },
  botonAbrirFiltros: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 30,
    right: 20,
    backgroundColor: 'rgba(44, 62, 80, 0.85)',
    padding: 10,
    borderRadius: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
});
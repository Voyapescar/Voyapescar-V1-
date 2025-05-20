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
import MapView, { Marker } from 'react-native-maps'; // Importamos MapView y Marker estándar
import axios from 'axios';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Asegúrate que el nombre y la ruta sean exactos
import { puntosDePesca as todosLosPuntosOriginales } from '../data/PuntosDePesca';
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from '../constants/apiConfig';
import LugarDetailsModal from '../components/LugarDetailsModal';
import ModalFiltros from '../components/ModalFiltros';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const INITIAL_LATITUDE_DELTA = 18; // Zoom para ver gran parte de Chile
const INITIAL_LONGITUDE_DELTA = INITIAL_LATITUDE_DELTA * ASPECT_RATIO;

export default function PantallaMapa({ navigation }) {
  const [modalLugarVisible, setModalLugarVisible] = useState(false);
  const [modalFiltrosVisible, setModalFiltrosVisible] = useState(false);
  const [selectedLugar, setSelectedLugar] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null); // Ref para el MapView estándar

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    tipo: null,
    region: null,
    especie: null,
  });
  const [puntosMostrados, setPuntosMostrados] = useState([]);
  const [opcionesTipo, setOpcionesTipo] = useState([]);
  const [opcionesRegion, setOpcionesRegion] = useState([]);
  const [opcionesEspecie, setOpcionesEspecie] = useState([]);

  const [currentMapRegion, setCurrentMapRegion] = useState({
    latitude: -35.6751,
    longitude: -71.5430,
    latitudeDelta: INITIAL_LATITUDE_DELTA,
    longitudeDelta: INITIAL_LONGITUDE_DELTA,
  });

  useEffect(() => {
    // Asegurarnos que todosLosPuntosOriginales esté definido y sea un array
    if (!Array.isArray(todosLosPuntosOriginales) || todosLosPuntosOriginales.length === 0) {
      console.warn("PantallaMapa: todosLosPuntosOriginales no está disponible o está vacío al generar opciones.");
      setOpcionesTipo(['Todos los Tipos']);
      setOpcionesRegion(['Todas las Regiones']);
      setOpcionesEspecie(['Todas las Especies']);
      setPuntosMostrados([]);
      return;
    }

    // Si tus tipos en PuntosDePesca.js ya están capitalizados, no necesitas la función capitalizarPrimeraLetra aquí.
    // Si están en minúscula y quieres que se muestren capitalizados en el Picker:
    // const capitalizarPrimeraLetra = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    // const tiposUnicos = [...new Set(todosLosPuntosOriginales.map(p => p.tipo).filter(Boolean).map(capitalizarPrimeraLetra))].sort();

    // Asumiendo que ya están capitalizados en PuntosDePesca.js:
    const tiposUnicos = [...new Set(todosLosPuntosOriginales.map(p => p.tipo).filter(Boolean))].sort();
    const regionesUnicas = [...new Set(todosLosPuntosOriginales.map(p => p.region).filter(Boolean))].sort();
    const especiesUnicas = [...new Set(
        todosLosPuntosOriginales.flatMap(p => (p.especies || []).map(e => e.nombreComun).filter(Boolean))
    )].sort();

    setOpcionesTipo(['Todos los Tipos', ...tiposUnicos]);
    setOpcionesRegion(['Todas las Regiones', ...regionesUnicas]);
    setOpcionesEspecie(['Todas las Especies', ...especiesUnicas]);
    setPuntosMostrados(todosLosPuntosOriginales);
    getCurrentLocation();
  }, []); // Se ejecuta solo una vez

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
  }, [filtrosAplicados]);

  const handleAplicarFiltrosDesdeModal = (nuevosFiltros) => {
    setFiltrosAplicados(nuevosFiltros);
    setModalFiltrosVisible(false);
  };

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
        latitudeDelta: 0.02,
        longitudeDelta: 0.02 * ASPECT_RATIO,
      }, 1000);
    } else {
        Alert.alert("Ubicación no disponible", "¿Intentar obtener tu ubicación?", [
            {text: "Cancelar"},
            {text: "Sí", onPress: getCurrentLocation}
        ]);
    }
  };

  const abrirModalDetalles = useCallback(async (lugar) => {
    if (!lugar || typeof lugar.latitude !== 'number' || typeof lugar.longitude !== 'number') return;
    setSelectedLugar(lugar);
    setModalLugarVisible(true);
    setIsLoadingWeather(true);
    setWeatherData(null);
    try {
      const response = await axios.get(WEATHER_API_BASE_URL, {
        params: { key: WEATHER_API_KEY, q: `${lugar.latitude},${lugar.longitude}`, lang: 'es', days: 3, aqi: 'no', alerts: 'no' },
        timeout: 10000
      });
      setWeatherData(response.data);
    } catch (err) {
      console.error('Error obteniendo clima:', err.response ? JSON.stringify(err.response.data) : err.message);
      setWeatherData(null);
    } finally {
      setIsLoadingWeather(false);
    }
  }, []);

  const cerrarModalDetalles = useCallback(() => {
    setModalLugarVisible(false);
  }, []);

  const onRegionChangeComplete = (region) => {
    setCurrentMapRegion(region);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <MapView // Usamos MapView estándar
          ref={mapRef}
          style={styles.map}
          mapType="hybrid"
          initialRegion={currentMapRegion}
          showsUserLocation={true}
          showsMyLocationButton={false}
          loadingEnabled={true}
          onRegionChangeComplete={onRegionChangeComplete}
        >
          {Array.isArray(puntosMostrados) && puntosMostrados.map((punto) => {
            if (!punto || typeof punto.latitude !== 'number' || typeof punto.longitude !== 'number') {
              return null;
            }
            return (
              <Marker
                key={punto.id ? punto.id.toString() : `marker-${punto.latitude}-${punto.longitude}`}
                coordinate={{ latitude: punto.latitude, longitude: punto.longitude }}
                title={punto.nombre || 'Punto Desconocido'}
                description={punto.tipo || ''}
                onPress={() => abrirModalDetalles(punto)}
                pinColor="dodgerblue" // Color original o el que prefieras
                // tracksViewChanges={false} // Considera habilitar si hay muchos marcadores y notas lentitud
              />
            );
          })}
        </MapView>

        <TouchableOpacity
          style={styles.botonAbrirFiltros}
          onPress={() => setModalFiltrosVisible(true)}
        >
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
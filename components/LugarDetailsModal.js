// components/LugarDetailsModal.js

import React, { useState } from 'react';

import {

  Modal,

  View,

  Text,

  StyleSheet,

  ScrollView,

  TouchableOpacity,

  Image,

  ActivityIndicator,

  Alert,

  Linking,

  ImageBackground,

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'; // Importar Ionicons



import {

  LICENCIA_PESCA_URL,

  SERNAPESCA_TELEFONO,

  TABLA_MAREAS_URL_GENERAL,

  SERNAPESCA_REGULACIONES_URL

} from '../constants/apiConfig';



// --- INICIO FUNCIÓN PLACEHOLDER PARA WEATHERCODE ---

// Necesitarás expandir esto considerablemente con todos los códigos WMO

// y los nombres de íconos de Ionicons que correspondan (o tu sistema de íconos).

// Puedes encontrar los códigos WMO en la documentación de Open-Meteo.

const getWeatherInfoFromCode = (code) => {

  if (code === undefined || code === null) return { description: 'N/D', iconName: 'help-circle-outline' };

  if (code === 0) return { description: 'Despejado', iconName: 'sunny-outline' };

  if (code === 1) return { description: 'Mayormente Despejado', iconName: 'partly-sunny-outline' };

  if (code === 2) return { description: 'Parc. Nublado', iconName: 'partly-sunny-outline' };

  if (code === 3) return { description: 'Nublado', iconName: 'cloudy-outline' };

  if (code >= 45 && code <= 48) return { description: 'Niebla', iconName: 'reorder-three-outline' }; // No hay ícono específico de niebla claro, ajusta

  if (code >= 51 && code <= 55) return { description: 'Llovizna', iconName: 'rainy-outline' }; // Llovizna (ligera, mod, densa)

  if (code >= 56 && code <= 57) return { description: 'Llovizna Helada', iconName: 'rainy-outline' }; // Llovizna helada

  if (code >= 61 && code <= 65) return { description: 'Lluvia', iconName: 'rainy-outline' }; // Lluvia (lig, mod, fuerte)

  if (code >= 66 && code <= 67) return { description: 'Lluvia Helada', iconName: 'rainy-outline' };

  if (code >= 71 && code <= 75) return { description: 'Nieve', iconName: 'snow-outline' }; // Nieve (lig, mod, fuerte)

  if (code === 77) return { description: 'Granizo Nieve', iconName: 'snow-outline' };

  if (code >= 80 && code <= 82) return { description: 'Chubascos Lluvia', iconName: 'rainy-outline' };

  if (code >= 85 && code <= 86) return { description: 'Chubascos Nieve', iconName: 'snow-outline' };

  if (code === 95) return { description: 'Tormenta', iconName: 'thunderstorm-outline' };

  if (code >= 96 && code <= 99) return { description: 'Tormenta Granizo', iconName: 'thunderstorm-outline' };

 

  return { description: `Cód:${code}`, iconName: 'cloud-outline' }; // Default

};

// --- FIN FUNCIÓN PLACEHOLDER ---





const LugarDetailsModal = ({ visible, lugar, weatherData, isLoading, onClose }) => {

  if (!lugar) return null;



  const [expandedSpeciesIndex, setExpandedSpeciesIndex] = useState(null);



  const nombreLugar = lugar?.nombre || 'Nombre no disponible';

  const cuotaPescaGeneral = lugar?.cuota || 'Consultar SERNAPESCA';



  // Ya no usaremos forecastDays de la API anterior, sino que procesaremos weatherData.daily

  const dailyData = weatherData?.daily;

  const esZonaCostera = lugar && lugar.tipo && ['Playa', 'Desembocadura', 'Muelle'].includes(lugar.tipo);



  const formatDate = (dateEpoch, formatOptions) => {

    const date = new Date(dateEpoch * 1000);

    const defaultOptions = { weekday: 'short', day: 'numeric', month: 'short' };

    return date.toLocaleDateString('es-CL', { ...defaultOptions, ...formatOptions });

  };



  const handleLinkPress = async (url) => {

    // ... (sin cambios)

    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);

    } else {

      Alert.alert("Error", `No se puede abrir el enlace: ${url}`);

    }

  };



  const toggleSpeciesDetails = (index) => {

    // ... (sin cambios)

    setExpandedSpeciesIndex(expandedSpeciesIndex === index ? null : index);

  };



  const renderEspecie = (especie, index) => {

    // ... (sin cambios)

    if (!especie) {

      return (

        <View key={`error-specie-${index}`} style={styles.errorContainer}>

          <Text style={styles.errorText}>Error: Datos de especie inválidos en índice {index}</Text>

        </View>

      );

    }



    return (

      <View key={especie.nombreComun || `specie-${index}`} style={styles.especieOuterContainer}>

        <TouchableOpacity onPress={() => toggleSpeciesDetails(index)} style={styles.especieTouchable}>

          <View style={styles.especieHeader}>

            {especie.imageAsset ? (

              <Image

                source={especie.imageAsset}

                style={styles.especieImagen}

                onError={(e) => console.log(`Error cargando imageAsset para ${especie.nombreComun || 'especie desconocida'}:`, e.nativeEvent.error)}

              />

            ) : (

              <View style={styles.especieImagenPlaceholder}>

                <Text style={styles.especieImagenPlaceholderText}>Sin Foto</Text>

              </View>

            )}

            <View style={styles.especieNombres}>

              <Text style={styles.especieNombreComun}>{especie.nombreComun || 'Especie Desconocida'}</Text>

            </View>

            <Text style={styles.expandIcon}>{expandedSpeciesIndex === index ? '➖' : '➕'}</Text>

          </View>

        </TouchableOpacity>



        {expandedSpeciesIndex === index && (

          <View style={styles.especieDetails}>

            <Text style={styles.especieNombreCientifico}>

              Nombre científico: ({especie.nombreCientifico || 'N/C'})

            </Text>

            {especie.caracteristicas && (

              <Text style={styles.especieDescripcion}>

                <Text style={styles.boldText}>Características:</Text> {especie.caracteristicas}

              </Text>

            )}

            {(especie.senuelos && especie.senuelos.length > 0) && (

              <Text style={styles.labelDetail}>

                <Text style={styles.boldText}>Señuelos recomendados:</Text> {(especie.senuelos || []).join(', ')}

              </Text>

            )}

            {(especie.carnadas && especie.carnadas.length > 0) && (

              <Text style={styles.labelDetail}>

                <Text style={styles.boldText}>Carnadas recomendadas:</Text> {(especie.carnadas || []).join(', ')}

              </Text>

            )}

          </View>

        )}

      </View>

    );

  };



  const modalContent = (

    <ScrollView contentContainerStyle={styles.scrollViewContentModal}>

      <Text style={styles.title}>{nombreLugar}</Text>



      {lugar?.descripcionLugar && (

        <Text style={styles.descripcionLugarText}>

          {lugar.descripcionLugar}

        </Text>

      )}



      <View style={styles.infoSection}>

        <Text style={styles.infoSectionTitle}> Especies que puedes encontrar🎣</Text>

        {lugar?.especies?.length > 0 ? (

          lugar.especies.map(renderEspecie)

        ) : (

          <Text style={styles.label}>Información de especies no disponible para este lugar.</Text>

        )}

        <Text style={[styles.label, {marginTop: 10}]}>

          <Text style={styles.boldText}>Cuota de pesca del lugar:</Text> <Text style={styles.infoText}>{cuotaPescaGeneral}</Text>

        </Text>

        <TouchableOpacity onPress={() => handleLinkPress(SERNAPESCA_REGULACIONES_URL)}>

          <Text style={[styles.linkText, {marginTop:10}]}>Regulaciones</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.infoSection}>

        {/* ... (sección licencia sin cambios) ... */}

        <Text style={styles.infoSectionTitle}>📜 Licencia de Pesca Deportiva</Text>

        <Text style={styles.label}>Es necesario contar con una licencia para la pesca recreativa en Chile.</Text>

        <TouchableOpacity onPress={() => handleLinkPress(LICENCIA_PESCA_URL)}>

          <Text style={styles.linkText}>Pincha aquí para obtener tu licencia de pesca</Text>

        </TouchableOpacity>

        <Text style={styles.label}>Contacto oficial SERNAPESCA : <Text style={styles.infoText}>{SERNAPESCA_TELEFONO}</Text></Text>

      </View>



      {esZonaCostera && (

        <View style={styles.infoSection}>

          {/* ... (sección mareas sin cambios) ... */}

          <Text style={styles.infoSectionTitle}>🌊 Información de Mareas</Text>

          <Text style={styles.label}>

            Las mareas influyen en la pesca de playas y desembocaduras. Consulta la tabla para planificar tu jornada:

          </Text>

          <TouchableOpacity onPress={() => handleLinkPress(TABLA_MAREAS_URL_GENERAL)}>

            <Text style={styles.linkText}>Tabla de mareas</Text>

          </TouchableOpacity>

          <Text style={styles.label}>Busca la localidad más cercana a "{lugar?.nombre || 'este lugar'}" en el sitio enlazado.</Text>

        </View>

      )}



      {/* --- SECCIÓN DE CLIMA MODIFICADA PARA OPEN-METEO --- */}

      {isLoading ? (

        <View style={[styles.infoSection, styles.loadingContainer]}>

          <ActivityIndicator size="large" color="#FFFFFF" />

          <Text style={styles.loadingText}>Cargando clima...</Text>

        </View>

      ) : weatherData && dailyData && dailyData.time && dailyData.time.length > 0 ? (

        <View style={styles.infoSectionNoPadding}>

          <Text style={[styles.infoSectionTitle, {paddingHorizontal: 15, marginBottom: 5}]}>📅 Pronóstico {dailyData.time.length} Días</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.forecastScrollContainer}>

            {dailyData.time.map((dateString, index) => {

              const dateEpoch = new Date(dateString).getTime() / 1000;

              const weatherCode = dailyData.weathercode?.[index];

              const weatherInfo = getWeatherInfoFromCode(weatherCode);



              return (

                <View key={dateEpoch} style={styles.forecastDayCard}>

                  <Text style={styles.forecastDateHeader}>{formatDate(dateEpoch, {weekday: 'short'})}</Text>

                  <Text style={styles.forecastDateSub}>{formatDate(dateEpoch, {day: 'numeric', month: 'short'})}</Text>

                 

                  <Ionicons name={weatherInfo.iconName} size={35} color="#FFF" style={styles.forecastIcon} />

                  <Text style={styles.forecastConditionText}>{weatherInfo.description}</Text>



                  <Text style={styles.forecastTempMax}>{`${Math.round(dailyData.temperature_2m_max?.[index] ?? 0)}°`}</Text>

                  <Text style={styles.forecastTempMin}>{`${Math.round(dailyData.temperature_2m_min?.[index] ?? 0)}°`}</Text>

                 

                  <Text style={styles.forecastDetailSmallIcon}>💧 <Text style={styles.forecastDetailSmall}>{`${dailyData.precipitation_probability_max?.[index] ?? 0}%`}</Text></Text>

                  <Text style={styles.forecastDetailSmallIcon}>🌬️ <Text style={styles.forecastDetailSmall}>{`${Math.round(dailyData.wind_speed_10m_max?.[index] ?? 0)} kph`}</Text></Text>

                  <Text style={styles.forecastDetailSmall}>UV: {dailyData.uv_index_max?.[index] ?? '-'}</Text>

                 

                  <Text style={styles.forecastAstroLabel}>🌅 {dailyData.sunrise?.[index]?.split('T')[1].substring(0,5) || '--:--'}</Text>

                  <Text style={styles.forecastAstroLabel}>🌇 {dailyData.sunset?.[index]?.split('T')[1].substring(0,5) || '--:--'}</Text>

                </View>

              );

            })}

          </ScrollView>

        </View>

      ) : (

        <View style={styles.infoSection}>

          <Text style={styles.infoSectionTitle}>🌦️ Clima</Text>

          <Text style={styles.label}>No se pudo cargar la información del clima.</Text>

        </View>

      )}

      {/* --- FIN SECCIÓN DE CLIMA MODIFICADA --- */}



      <View style={styles.ecoReminderSection}>

        {/* ... (sección eco reminder sin cambios) ... */}

        <Text style={styles.ecoReminderTitle}>🌎 ¡Cuidemos Nuestros Paraísos de Pesca!</Text>

        <Text style={styles.ecoReminderText}>

          • Llévate toda tu basura (incluyendo líneas, anzuelos y envases).{'\n'}

          • No alteres la vegetación ni el entorno. Usa senderos existentes.{'\n'}

          • Evita derrames de combustible o aceites si usas embarcación.{'\n'}

          • Practica la pesca con devolución con cuidado si no vas a consumir.{'\n'}

          • Infórmate y respeta siempre las vedas, tallas y cuotas.{'\n'}

        </Text>

        <Text style={styles.ecoSlogan}>¡Pesca responsable hoy, pesca para el mañana!</Text>

      </View>



      <TouchableOpacity style={styles.closeButton} onPress={() => {

          setExpandedSpeciesIndex(null);

          onClose();

        }}>

        <Text style={styles.closeButtonText}>Cerrar</Text>

      </TouchableOpacity>

    </ScrollView>

  );



  return (

    <Modal

      // ... (props del Modal sin cambios) ...

      visible={visible}

      animationType="slide"

      transparent={true}

      onRequestClose={() => {

        setExpandedSpeciesIndex(null);

        onClose();

      }}

    >

      <View style={styles.modalBackground}>

        {lugar?.imagenFondoSecciones ? (

          <ImageBackground

            source={lugar.imagenFondoSecciones}

            style={styles.modalContainer}

            imageStyle={styles.modalBackgroundImageStyle}

          >

            {modalContent}

          </ImageBackground>

        ) : (

          <View style={styles.modalContainer}>

            {modalContent}

          </View>

        )}

      </View>

    </Modal>

  );

};



const styles = StyleSheet.create({

  // ... (tus estilos existentes) ...

  // Asegúrate de que el estilo de especieImagen sea el que te gusta (el más grande)

  // y que forecastIcon y forecastConditionText (nuevo) se vean bien.



  modalBackground: {

    flex: 1,

    backgroundColor: 'transparent',

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 10,

  },

  modalContainer: {

    width: '100%',

    maxHeight: '95%',

    backgroundColor: '#2c3e50',

    borderRadius: 12,

    paddingTop: 5,

    overflow: 'hidden',

    elevation: 10,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 4 },

    shadowOpacity: 0.3,

    shadowRadius: 5,

  },

  modalBackgroundImageStyle: {

    resizeMode: 'cover',

    opacity: 0.6,

  },

  scrollViewContentModal: { paddingBottom: 20 },

  title: {

    fontSize: 22,

    fontWeight: 'bold',

    color: '#ECF0F1',

    textAlign: 'center',

    marginBottom: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#3498db',

    paddingBottom: 10,

    marginHorizontal: 20,

    textShadowColor: 'rgba(0, 0, 0, 0.5)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 3,

  },

  descripcionLugarText: {

    fontSize: 15,

    color: '#ECF0F1',

    textAlign: 'center',

    fontStyle: 'italic',

    marginHorizontal: 20,

    marginBottom: 15,

    lineHeight: 21,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  infoSection: {

    marginBottom: 15,

    paddingHorizontal: 15,

    paddingVertical: 12,

    marginHorizontal: 15,

    backgroundColor: 'rgba(35, 47, 62, 0.85)',

    borderRadius: 8,

  },

  infoSectionNoPadding: {

    marginBottom: 15,

  },

  infoSectionTitle: {

    fontSize: 18,

    fontWeight: '600',

    color: '#3498db',

    marginBottom: 10,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  label: {

    fontSize: 15,

    color: '#ECF0F1',

    marginBottom: 5,

    lineHeight: 20,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  infoText: { color: '#ECF0F1', fontWeight: '500' },

  linkText: {

    fontSize: 15,

    color: '#5dade2',

    textDecorationLine: 'underline',

    fontWeight: '500',

    marginVertical: 8,

  },

  loadingContainer: { alignItems: 'center' },

  loadingText: {

    marginTop: 10,

    fontSize: 16,

    color: '#ECF0F1',

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  errorContainer: {

    padding: 10,

    backgroundColor: 'rgba(255,0,0,0.1)',

    marginBottom: 10,

    borderRadius: 5,

  },

  errorText: {

    color: 'red',

    fontSize: 14,

  },

  especieOuterContainer: {

    borderBottomWidth: 1,

    borderBottomColor: 'rgba(255, 255, 255, 0.18)',

    paddingBottom: 10,

    marginBottom:10,

  },

  especieTouchable: { paddingVertical: 8 },

  especieHeader: { flexDirection: 'row', alignItems: 'center' },

  especieImagen: { // Estilo para la imagen de la especie (restaurado al tamaño original)

    width: 180,

    height: 80,

    borderRadius: 4,

    marginRight: 10,

    resizeMode: 'contain',

    backgroundColor: 'transparent',

  },

  especieImagenPlaceholder: {

    width: 60,

    height: 45,

    borderRadius: 4,

    marginRight: 10,

    backgroundColor: 'rgba(0,0,0,0.3)',

    alignItems: 'center',

    justifyContent: 'center',

  },

  especieImagenPlaceholderText: {

    fontSize: 10,

    color: '#bbb',

    textAlign: 'center',

  },

  especieNombres: { flex: 1 },

  especieNombreComun: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#ECF0F1',

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  expandIcon: {

    fontSize: 22,

    color: '#3498db',

    marginLeft: 10,

    padding: 5

  },

  especieDetails: {

    paddingLeft: 5,

    marginTop: 10,

    borderTopWidth: 1,

    borderTopColor: 'rgba(255,255,255,0.18)',

    paddingTop: 10,

  },

  especieNombreCientifico: {

    fontSize: 13,

    fontStyle: 'italic',

    color: '#BDC3C7',

    marginBottom: 5,

    textShadowColor: 'rgba(0, 0, 0, 0.2)',

    textShadowOffset: { width: 1, height: 0.5 },

    textShadowRadius: 0.5,

  },

  especieDescripcion: {

    fontSize: 14,

    color: '#ECF0F1',

    lineHeight: 19,

    marginBottom: 10,

    fontStyle: 'italic',

  },

  labelDetail: {

    fontSize: 14,

    color: '#ECF0F1',

    lineHeight: 20,

    marginTop: 5,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  boldText: {

    fontWeight: 'bold',

    color: '#ECF0F1',

  },

  forecastScrollContainer: { paddingHorizontal: 15, paddingVertical: 10 },

  forecastDayCard: {

    backgroundColor: 'rgba(0, 0, 0, 0.35)',

    borderRadius: 10,

    paddingVertical: 10,

    paddingHorizontal: 8,

    marginRight: 10,

    alignItems: 'center',

    width: 105,

    minHeight: 240, // Aumenté un poco para el texto de condición

    justifyContent: 'space-around', // Cambié para distribuir mejor

    borderWidth: 1,

    borderColor: 'rgba(255, 255, 255, 0.2)',

  },

  forecastDateHeader: { fontSize: 14, color: '#3498db', fontWeight: 'bold' },

  forecastDateSub: { fontSize: 12, color: '#BDC3C7', marginBottom: 3 },

  forecastIcon: { // Estilo para el componente Ionicon

    marginVertical: 5,

  },

  forecastIconPlaceholder: { // Placeholder si no hay ícono

    width: 40,

    height: 40,

    marginVertical: 5,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.1)',

    borderRadius: 5,

  },

  forecastIconPlaceholderText: {

    fontSize: 9,

    color: '#ccc',

    textAlign: 'center',

  },

  forecastConditionText: { // Nuevo estilo para la descripción del clima

    fontSize: 11,

    color: '#ECF0F1',

    textAlign: 'center',

    marginBottom: 5,

    minHeight: 22, // Para 2 líneas de texto

  },

  forecastTempMax: {

    fontSize: 19,

    color: '#FFFFFF',

    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.3)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  forecastTempMin: { fontSize: 14, color: '#BDC3C7', marginBottom: 4 },

  forecastDetailSmall: { fontSize: 11, color: '#ECF0F1', textAlign: 'center' },

  forecastDetailSmallIcon: { fontSize: 11, color: '#ECF0F1', lineHeight: 16, textAlign: 'center', marginTop: 2 },

  forecastAstroLabel: { fontSize: 10, color: '#BDC3C7', marginTop: 3 },

  ecoReminderSection: {

    marginBottom: 15,

    paddingHorizontal: 15,

    paddingVertical: 12,

    marginHorizontal: 15,

    backgroundColor: 'rgba(39, 174, 96, 0.6)',

    borderRadius: 8,

    borderColor: '#27ae60',

    borderWidth: 1,

  },

  ecoReminderTitle: {

    fontSize: 17,

    fontWeight: 'bold',

    color: '#2ecc71',

    marginBottom: 8,

    textAlign: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  ecoReminderText: {

    fontSize: 13,

    color: '#ECF0F1',

    lineHeight: 18,

    marginBottom: 8,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  ecoSlogan: {

    fontSize: 13,

    color: '#2ecc71',

    fontWeight: 'bold',

    textAlign: 'center',

    fontStyle: 'italic',

    textShadowColor: 'rgba(0, 0, 0, 0.4)',

    textShadowOffset: { width: 1, height: 1 },

    textShadowRadius: 2,

  },

  closeButton: {

    backgroundColor: '#3498db',

    paddingVertical: 12,

    paddingHorizontal: 20,

    borderRadius: 8,

    alignItems: 'center',

    marginTop: 20,

    marginHorizontal: 15,

    marginBottom: 10,

  },

  closeButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold'

  },

});



export default LugarDetailsModal;
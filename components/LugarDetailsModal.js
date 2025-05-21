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

// Importar URLs y constantes desde apiConfig.js
import {
  LICENCIA_PESCA_URL,
  SERNAPESCA_TELEFONO,
  TABLA_MAREAS_URL_GENERAL,
  SERNAPESCA_REGULACIONES_URL
} from '../constants/apiConfig'; // Ajusta la ruta si es necesario ('../constants/apiConfig')

const LugarDetailsModal = ({ visible, lugar, weatherData, isLoading, onClose }) => {
  if (!lugar) return null;

  const [expandedSpeciesIndex, setExpandedSpeciesIndex] = useState(null);

  const nombreLugar = lugar?.nombre || 'Nombre no disponible';
  const cuotaPescaGeneral = lugar?.cuota || 'Consultar SERNAPESCA';

  const forecastDays = weatherData?.forecast?.forecastday;
  const esZonaCostera = lugar && lugar.tipo && ['playa', 'desembocadura', 'roquerio', 'caleta', 'costa'].includes(lugar.tipo);

  const formatDate = (dateEpoch, formatOptions) => {
    const date = new Date(dateEpoch * 1000);
    const defaultOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('es-CL', { ...defaultOptions, ...formatOptions });
  };

  const handleLinkPress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", `No se puede abrir el enlace: ${url}`);
    }
  };

  const toggleSpeciesDetails = (index) => {
    if (expandedSpeciesIndex === index) {
      setExpandedSpeciesIndex(null);
    } else {
      setExpandedSpeciesIndex(index);
    }
  };

  const modalContent = (
    <ScrollView contentContainerStyle={styles.scrollViewContentModal}>
      <Text style={styles.title}>{nombreLugar}</Text>

      <View style={styles.infoSection}>
        <Text style={styles.infoSectionTitle}>🎣 Especies y Regulaciones</Text>
        {lugar && Array.isArray(lugar.especies) && lugar.especies.length > 0 ? (
          lugar.especies.map((especie, index) => {
            if (!especie) {
              console.warn(`LugarDetailsModal: especie en índice ${index} es null o undefined.`);
              return <Text key={`error-specie-${index}`} style={{color: 'red', padding: 10}}>Error: Datos de especie inválidos en índice {index}</Text>;
            }

            return (
              <View key={especie.nombreComun || `specie-${index}`} style={styles.especieOuterContainer}>
                <TouchableOpacity onPress={() => toggleSpeciesDetails(index)} style={styles.especieTouchable}>
                  <View style={styles.especieHeader}>
                    {especie.imageAsset ? (
                      <Image
                        source={especie.imageAsset} // Esta ruta ya viene procesada desde puntosDePesca.js
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
                        <Text style={styles.boldText}>Señuelos:</Text> {(especie.senuelos || []).join(', ')}
                      </Text>
                    )}
                    {(especie.carnadas && especie.carnadas.length > 0) && (
                      <Text style={styles.labelDetail}>
                        <Text style={styles.boldText}>Carnadas:</Text> {(especie.carnadas || []).join(', ')}
                      </Text>
                    )}
                  </View>
                )}
              </View>
            );
          })
        ) : (
          <Text style={styles.label}>Información de especies no disponible para este lugar.</Text>
        )}
        <Text style={[styles.label, {marginTop: 10}]}>
          <Text style={styles.boldText}>Cuota de pesca del lugar:</Text> <Text style={styles.infoText}>{cuotaPescaGeneral}</Text>
        </Text>
        <TouchableOpacity onPress={() => handleLinkPress(SERNAPESCA_REGULACIONES_URL)}>
          <Text style={[styles.linkText, {marginTop:10}]}>Consultar Normativa Oficial VIGENTE en SERNAPESCA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoSectionTitle}>📜 Licencia de Pesca Deportiva</Text>
        <Text style={styles.label}>Es necesario contar con una licencia para la pesca recreativa en Chile. Puedes obtenerla en línea.</Text>
        <TouchableOpacity onPress={() => handleLinkPress(LICENCIA_PESCA_URL)}>
          <Text style={styles.linkText}>Obtener Licencia Aquí (SERNAPESCA)</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Para más información, contacta a SERNAPESCA al: <Text style={styles.infoText}>{SERNAPESCA_TELEFONO}</Text></Text>
      </View>

      {esZonaCostera && (
        <View style={styles.infoSection}>
          <Text style={styles.infoSectionTitle}>🌊 Información de Mareas</Text>
          <Text style={styles.label}>
            Las mareas influyen en la pesca costera. Consulta la tabla para planificar tu jornada:
          </Text>
          <TouchableOpacity onPress={() => handleLinkPress(TABLA_MAREAS_URL_GENERAL)}>
            <Text style={styles.linkText}>Consultar Tabla de Mareas para Chile</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Busca la localidad más cercana a "{lugar?.nombre || 'este lugar'}" en el sitio enlazado.</Text>
        </View>
      )}

      {isLoading ? (
        <View style={[styles.infoSection, styles.loadingContainer]}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.loadingText}>Cargando clima...</Text>
        </View>
      ) : weatherData && forecastDays && forecastDays.length > 0 ? (
        <View style={styles.infoSectionNoPadding}>
          <Text style={[styles.infoSectionTitle, {paddingHorizontal: 15, marginBottom: 5}]}>📅 Pronóstico {forecastDays.length} Días</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.forecastScrollContainer}>
            {forecastDays.map((dayForecast) => {
              const dayInfo = dayForecast.day;
              const astroInfo = dayForecast.astro;
              if (!dayInfo || !astroInfo) {
                return null;
              }
              return (
                <View key={dayForecast.date_epoch} style={styles.forecastDayCard}>
                  <Text style={styles.forecastDateHeader}>{formatDate(dayForecast.date_epoch, {weekday: 'short'})}</Text>
                  <Text style={styles.forecastDateSub}>{formatDate(dayForecast.date_epoch, {day: 'numeric', month: 'short'})}</Text>
                  {dayInfo.condition && dayInfo.condition.icon ? (
                       <Image source={{ uri: `https:${dayInfo.condition.icon}` }} style={styles.forecastIcon} />
                  ) : <View style={styles.forecastIcon} /> }
                  <Text style={styles.forecastTempMax}>{`${Math.round(dayInfo.maxtemp_c)}°`}</Text>
                  <Text style={styles.forecastTempMin}>{`${Math.round(dayInfo.mintemp_c)}°`}</Text>
                  <Text style={styles.forecastDetailSmallIcon}>💧 <Text style={styles.forecastDetailSmall}>{`${dayInfo.daily_chance_of_rain || 0}%`}</Text></Text>
                  <Text style={styles.forecastDetailSmallIcon}>🌬️ <Text style={styles.forecastDetailSmall}>{`${Math.round(dayInfo.maxwind_kph || 0)} kph`}</Text></Text>
                  <Text style={styles.forecastDetailSmall}>UV: {dayInfo.uv || '-'}</Text>
                  <Text style={styles.forecastAstroLabel}>🌅 {astroInfo.sunrise || '--:--'}</Text>
                  <Text style={styles.forecastAstroLabel}>🌇 {astroInfo.sunset || '--:--'}</Text>
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

      <View style={styles.ecoReminderSection}>
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
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setExpandedSpeciesIndex(null);
        onClose();
      }}
    >
      <View style={styles.modalBackground}>
        {lugar && lugar.imagenFondoSecciones ? ( // Esta ruta ya viene procesada desde puntosDePesca.js
          <ImageBackground
            source={lugar.imagenFondoSecciones}
            style={styles.modalContainer}
            imageStyle={styles.modalBackgroundImageStyle}
            onError={(e) => console.log("ERROR AL CARGAR IMAGEN DE FONDO DEL MODAL:", e.nativeEvent.error)}
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

// ESTILOS PARA EL MODAL (COPIA AQUÍ LOS ESTILOS DEL MODAL DE TU CÓDIGO ORIGINAL)
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalContainer: {
    width: '100%',
    maxHeight: '95%',
    backgroundColor: '#2c3e50', // Un color de fondo oscuro como en tu original
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
    opacity: 0.3, // Para que el texto sea legible sobre la imagen
  },
  scrollViewContentModal: { paddingBottom: 20 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ECF0F1',
    textAlign: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3498db',
    paddingBottom: 10,
    marginHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  infoSection: {
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 15,
    backgroundColor: 'rgba(35, 47, 62, 0.85)', // Ligeramente más opaco que el fondo principal si hay imagen
    borderRadius: 8,
  },
  infoSectionNoPadding: {
    marginBottom: 15,
     // Los paddings se aplicarán directamente a los elementos hijos o al título
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
  especieOuterContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.18)',
    paddingBottom: 10,
    marginBottom:10,
  },
  especieTouchable: { paddingVertical: 8 },
  especieHeader: { flexDirection: 'row', alignItems: 'center' },
  especieImagen: {
    width: 120, // Ajusta según necesites
    height: 80, // Ajusta según necesites
    borderRadius: 4,
    marginRight: 10,
    resizeMode: 'contain', // o 'cover'
    backgroundColor: 'rgba(0,0,0,0.1)', // Placeholder mientras carga o si falla
  },
  especieImagenPlaceholder: {
    width: 60, // O el tamaño que prefieras
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
      color: '#ECF0F1', // Asegúrate que el texto en negrita sea visible
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
    minHeight: 220,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  forecastDateHeader: { fontSize: 14, color: '#3498db', fontWeight: 'bold' },
  forecastDateSub: { fontSize: 12, color: '#BDC3C7', marginBottom: 3 },
  forecastIcon: { width: 45, height: 45, marginVertical: 3 },
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
    backgroundColor: 'rgba(39, 174, 96, 0.6)', // Un poco más opaco
    borderRadius: 8,
    borderColor: '#27ae60',
    borderWidth: 1,
  },
  ecoReminderTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2ecc71', // Un verde brillante
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
    backgroundColor: '#3498db', // Azul
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
// Voyapescar/components/ModalFiltros.js
import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  ImageBackground, // Necesario para el fondo
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

// --- AJUSTA ESTOS VALORES PARA LA IMAGEN DE FONDO ---
const RUTA_IMAGEN_FONDO = '../imagenes/fondo_modal.jpg'; // <-- CONFIRMA EL NOMBRE DE TU IMAGEN
const OPACIDAD_IMAGEN_FONDO = 0.6; // Sube o baja según necesites (0.0 a 1.0)
const COLOR_OVERLAY_SOBRE_IMAGEN = 'rgba(44, 62, 80, 0.7)'; // Tinte de color sobre la imagen
const RESIZE_MODE_IMAGEN = 'cover'; // 'cover', 'contain', 'stretch', 'center'
// --- FIN AJUSTES ---

let imagenDeFondo;
try {
  imagenDeFondo = require(RUTA_IMAGEN_FONDO);
  console.log("ModalFiltros: Imagen de fondo cargada:", RUTA_IMAGEN_FONDO);
} catch (error) {
  console.error("ModalFiltros: ¡ERROR AL CARGAR IMAGEN DE FONDO!", RUTA_IMAGEN_FONDO, error);
  imagenDeFondo = null; // Fallback si la imagen no se encuentra
}

const ModalFiltros = ({
  visible,
  onClose,
  onAplicarFiltros,
  opcionesTipo,
  opcionesRegion,
  opcionesEspecie,
  filtrosActuales,
}) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(
    filtrosActuales.tipo || (opcionesTipo && opcionesTipo.length > 0 ? opcionesTipo[0] : null)
  );
  const [regionSeleccionada, setRegionSeleccionada] = useState(
    filtrosActuales.region || (opcionesRegion && opcionesRegion.length > 0 ? opcionesRegion[0] : null)
  );
  const [especieSeleccionada, setEspecieSeleccionada] = useState(
    filtrosActuales.especie || (opcionesEspecie && opcionesEspecie.length > 0 ? opcionesEspecie[0] : null)
  );

  useEffect(() => {
    setTipoSeleccionado(filtrosActuales.tipo || (opcionesTipo && opcionesTipo.length > 0 ? opcionesTipo[0] : null));
    setRegionSeleccionada(filtrosActuales.region || (opcionesRegion && opcionesRegion.length > 0 ? opcionesRegion[0] : null));
    setEspecieSeleccionada(filtrosActuales.especie || (opcionesEspecie && opcionesEspecie.length > 0 ? opcionesEspecie[0] : null));
  }, [filtrosActuales, opcionesTipo, opcionesRegion, opcionesEspecie, visible]);

  const handleAplicar = () => {
    onAplicarFiltros({
      tipo: (opcionesTipo && tipoSeleccionado === opcionesTipo[0]) ? null : tipoSeleccionado,
      region: (opcionesRegion && regionSeleccionada === opcionesRegion[0]) ? null : regionSeleccionada,
      especie: (opcionesEspecie && especieSeleccionada === opcionesEspecie[0]) ? null : especieSeleccionada,
    });
  };

  const limpiarFiltros = () => {
    const primerTipo = opcionesTipo && opcionesTipo.length > 0 ? opcionesTipo[0] : null;
    const primeraRegion = opcionesRegion && opcionesRegion.length > 0 ? opcionesRegion[0] : null;
    const primeraEspecie = opcionesEspecie && opcionesEspecie.length > 0 ? opcionesEspecie[0] : null;

    setTipoSeleccionado(primerTipo);
    setRegionSeleccionada(primeraRegion);
    setEspecieSeleccionada(primeraEspecie);
    onAplicarFiltros({ tipo: null, region: null, especie: null });
  };

  const renderContent = () => (
    <View style={styles.modalView}>
      <View style={styles.header}>
        <Text style={styles.tituloModal}>Filtrar Puntos</Text>
        <TouchableOpacity onPress={onClose} style={styles.botonCerrar}>
          <Ionicons name="close-circle" size={32} color="#ecf0f1" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollViewStyle} // Estilo para el ScrollView en sí
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.pickersContainer}>
          <Text style={styles.labelPicker}>Tipo de Lugar:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={tipoSeleccionado}
              style={styles.picker}
              onValueChange={(itemValue) => setTipoSeleccionado(itemValue)}
              dropdownIconColor="#ecf0f1"
              prompt="Selecciona un tipo"
            >
              {(opcionesTipo || []).map(opcion => (
                <Picker.Item key={`tipo-${opcion}`} label={opcion} value={opcion} />
              ))}
            </Picker>
          </View>

          <Text style={styles.labelPicker}>Región:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={regionSeleccionada}
              style={styles.picker}
              onValueChange={(itemValue) => setRegionSeleccionada(itemValue)}
              dropdownIconColor="#ecf0f1"
              prompt="Selecciona una región"
            >
              {(opcionesRegion || []).map(opcion => (
                <Picker.Item key={`region-${opcion}`} label={opcion} value={opcion} />
              ))}
            </Picker>
          </View>

          <Text style={styles.labelPicker}>Especie Principal:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={especieSeleccionada}
              style={styles.picker}
              onValueChange={(itemValue) => setEspecieSeleccionada(itemValue)}
              dropdownIconColor="#ecf0f1"
              prompt="Selecciona una especie"
            >
              {(opcionesEspecie || []).map(opcion => (
                <Picker.Item key={`especie-${opcion}`} label={opcion} value={opcion} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.botonesContainer}>
          <TouchableOpacity style={[styles.botonModal, styles.botonLimpiar]} onPress={limpiarFiltros}>
            <Text style={styles.textoBotonModal}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botonModal, styles.botonAplicar]} onPress={handleAplicar}>
            <Text style={styles.textoBotonModal}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true} // Mantenemos true para el efecto overlay
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {imagenDeFondo ? (
          <ImageBackground
            source={imagenDeFondo}
            style={styles.modalContentContainer} // Este es el "cuadro" del modal
            imageStyle={{ opacity: OPACIDAD_IMAGEN_FONDO }}
            resizeMode={RESIZE_MODE_IMAGEN}
            onError={(error) => {
              console.error("ModalFiltros: Error al cargar ImageBackground:", error.nativeEvent.error);
            }}
          >
            {/* View interno para el overlay de color sobre la imagen */}
            <View style={[styles.contentOverlayOnImage, { backgroundColor: COLOR_OVERLAY_SOBRE_IMAGEN }]}>
              {renderContent()}
            </View>
          </ImageBackground>
        ) : (
          // Fallback si no hay imagen de fondo
          <View style={[styles.modalContentContainer, { backgroundColor: '#2c3e50' }]}>
            {renderContent()}
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: { // Define el tamaño y forma del "cuadro" del modal
    width: '90%',
    maxHeight: '85%',
    minHeight: Platform.OS === 'ios' ? 500 : 480, // Altura mínima para el contenido
    borderRadius: 20,
    overflow: 'hidden', // Esencial para que el borderRadius afecte a ImageBackground
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    // No necesita backgroundColor aquí si ImageBackground se usa
  },
  contentOverlayOnImage: { // Para el tinte de color sobre la imagen
    flex: 1, // Debe ocupar todo el ImageBackground
    // backgroundColor se aplica inline
  },
  modalView: { // Contenedor del contenido real (header, scrollview)
    flex: 1, // Debe ocupar todo el contentOverlayOnImage o modalContentContainer
    // backgroundColor: 'transparent', // Para que se vea el overlay o la imagen de fondo
    // El padding se aplica aquí para dar espacio al contenido
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(236, 240, 241, 0.25)',
  },
  tituloModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  botonCerrar: {
    padding: 5,
  },
  scrollViewStyle: { // Estilo para el componente ScrollView
    flex: 1, // Importante para que tome el espacio disponible
  },
  scrollViewContent: { // Estilo para el contenido DENTRO del ScrollView
    flexGrow: 1, // Clave para que el contenido pueda crecer y habilitar el scroll
    justifyContent: 'space-between', // Empuja los botones al final
    paddingBottom: 10,
  },
  pickersContainer: {
    // Este view ayuda a que justifyContent: 'space-between' del scrollViewContent funcione mejor
  },
  labelPicker: {
    fontSize: 16,
    color: '#ecf0f1',
    marginBottom: 8,
    marginTop: 12,
    fontWeight: '500',
  },
  pickerWrapper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(236, 240, 241, 0.2)',
    overflow: 'hidden',
  },
  picker: {
    height: Platform.OS === 'ios' ? 120 : 50,
    width: '100%',
    color: Platform.OS === 'android' ? '#ecf0f1' : '#2c3e50',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginTop: 10, // Reducido un poco el margen superior
    borderTopWidth: 1,
    borderTopColor: 'rgba(236, 240, 241, 0.2)',
  },
  botonModal: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    // Sombras sutiles para los botones
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  botonLimpiar: {
    backgroundColor: '#95a5a6',
  },
  botonAplicar: {
    backgroundColor: '#3498db',
  },
  textoBotonModal: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ModalFiltros;
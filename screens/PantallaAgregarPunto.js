// screens/PantallaAgregarPunto.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaAgregarPunto() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Punto de Pesca</Text>
      <Text>Aquí podrás agregar nuevos puntos de pesca.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
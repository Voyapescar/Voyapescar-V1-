// screens/PantallaRedSocial.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaRedSocial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Red Social</Text>
      <Text>Aquí se mostrará el feed social.</Text>
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
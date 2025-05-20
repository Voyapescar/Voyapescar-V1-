// Voyapescar/App.js
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

import PantallaMapa from './screens/PantallaMapa';
import PantallaRedSocial from './screens/PantallaRedSocial';
import PantallaRegistrarCaptura from './screens/PantallaRegistrarCaptura';
import PantallaTorneos from './screens/PantallaTorneos';
import PantallaAgregarPunto from './screens/PantallaAgregarPunto';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("App.js renderizando..."); // Log para ver si App.js se carga
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'ellipse-outline';
              if (route.name === 'Mapa') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'Red Social') {
                iconName = focused ? 'people-circle' : 'people-circle-outline';
              } else if (route.name === 'Captura') {
                iconName = focused ? 'camera' : 'camera-outline';
              } else if (route.name === 'Torneos') {
                iconName = focused ? 'trophy' : 'trophy-outline';
              } else if (route.name === 'Agregar Punto') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              return <Ionicons name={iconName} size={focused ? size + 2 : size} color={color} />;
            },
            tabBarActiveTintColor: '#3498db',
            tabBarInactiveTintColor: '#bdc3c7',
            tabBarLabelStyle: {
              fontSize: 10,
              paddingBottom: Platform.OS === 'ios' ? 0 : 5,
            },
            tabBarStyle: {
              backgroundColor: '#2c3e50',
              borderTopColor: 'transparent',
              height: Platform.OS === 'ios' ? 90 : 65,
              paddingTop: Platform.OS === 'ios' ? 5 : 0,
            },
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen
            name="Mapa"
            component={PantallaMapa}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Red Social" component={PantallaRedSocial} />
          <Tab.Screen name="Captura" component={PantallaRegistrarCaptura} />
          <Tab.Screen name="Torneos" component={PantallaTorneos} />
          <Tab.Screen name="Agregar Punto" component={PantallaAgregarPunto} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
// No arquivo onde você define a navegação (AppNavigation.js)
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/Profile';
import CameraScreen from '../screens/Camera';
import PagamentoScreen from '../screens/Payment';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Payment" component={PagamentoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

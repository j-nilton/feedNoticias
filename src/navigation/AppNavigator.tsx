import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detail: { articleUrl: string; article: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Entrar' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Notícias' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

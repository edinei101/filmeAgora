import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaBusca from '../telas/TelaBusca';
import TelaDetalhes from '../telas/telaDetalhes';

const Stack = createStackNavigator();

const NavegadorApp = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Busca">
      <Stack.Screen name="Busca" component={TelaBusca} options={{ title: 'Buscar Filmes' }} />
      <Stack.Screen name="Detalhes" component={TelaDetalhes} options={{ title: 'Detalhes do Filme' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavegadorApp;
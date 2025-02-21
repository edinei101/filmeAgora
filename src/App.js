import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

// Tela de Busca
function TelaBusca() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Busca</Text>
    </View>
  );
}

// Tela de Detalhes
function TelaDetalhes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Detalhes</Text>
    </View>
  );
}

// Configuração do React Navigation
const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Busca">
        <Stack.Screen
          name="Busca"
          component={TelaBusca}
          options={{ title: 'Buscar Filmes' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{ title: 'Detalhes do Filme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
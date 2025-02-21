import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const IndicadorCarregamento = () => (
  <View style={estilos.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndicadorCarregamento;
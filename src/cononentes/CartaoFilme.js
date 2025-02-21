import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartaoFilme = ({ filme, aoPressionar }) => {
  return (
    <TouchableOpacity onPress={aoPressionar} style={estilos.cartao}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${filme.poster_path}` }}
        style={estilos.poster}
      />
      <View style={estilos.detalhes}>
        <Text style={estilos.titulo}>{filme.title}</Text>
        <Text style={estilos.dataLancamento}>{filme.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  detalhes: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataLancamento: {
    fontSize: 14,
    color: '#666',
  },
});

export default CartaoFilme;
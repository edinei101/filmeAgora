import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { obterDetalhesFilme } from '../api/tmdb';
import IndicadorCarregamento from '../cononentes/IndicadorCerregamento';

const TelaDetalhes = ({ route }) => {
  const { filmeId } = route.params;
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarDetalhes = async () => {
      const detalhes = await obterDetalhesFilme(filmeId);
      setFilme(detalhes);
      setCarregando(false);
    };
    carregarDetalhes();
  }, [filmeId]);

  if (carregando) {
    return <IndicadorCarregamento />;
  }

  return (
    <ScrollView style={estilos.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${filme.poster_path}` }}
        style={estilos.poster}
      />
      <Text style={estilos.titulo}>{filme.title}</Text>
      <Text style={estilos.sinopse}>{filme.overview}</Text>
      <Text style={estilos.detalhes}>Data de Lançamento: {filme.release_date}</Text>
      <Text style={estilos.detalhes}>Avaliação: {filme.vote_average}</Text>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  sinopse: {
    fontSize: 16,
    marginTop: 8,
  },
  detalhes: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default TelaDetalhes;
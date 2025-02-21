import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { buscarFilmes } from '../api/tmdb';
import CartaoFilme from '../cononentes/CartaoFilme';
import IndicadorCarregamento from '../cononentes/IndicadorCerregamento';

const TelaBusca = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscar = async () => {
    setCarregando(true);
    const resultados = await buscarFilmes(query);
    setFilmes(resultados);
    setCarregando(false);
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        placeholder="Digite o nome do filme"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={buscar} />
      {carregando ? (
        <IndicadorCarregamento />
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartaoFilme
              filme={item}
              aoPressionar={() => navigation.navigate('Detalhes', { filmeId: item.id })}
            />
          )}
        />
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default TelaBusca;
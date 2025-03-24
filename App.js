import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import estilos from './style'; // Importamos los estilos desde styles.js
import { obtenerPokemons, obtenerDetallesPokemon } from './service';

const PokemonApp = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  useEffect(() => {
    obtenerPokemons(setPokemonList, setCargando, setError);
  }, []);

  if (cargando) {
    return (
      <View style={estilos.cargandoContenedor}>
        <ActivityIndicator size="large" color="#FF6347" />
        <Text style={estilos.cargandoTexto}>Cargando datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={estilos.errorContenedor}>
        <Text>{error}</Text>
        <Button title="Reintentar" onPress={() => obtenerPokemons(setPokemonList, setCargando, setError)} />
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      {pokemonSeleccionado ? (
        <ScrollView contentContainerStyle={estilos.scrollContenedor}>
          <Text style={estilos.titulo}>{pokemonSeleccionado.name}</Text>
          <Image source={{ uri: pokemonSeleccionado.imagen }} style={estilos.imagenPokemon} />
          <Text style={estilos.tituloDetalles}>ID: {pokemonSeleccionado.id}</Text>
          <Text style={estilos.tituloDetalles}>Altura: {pokemonSeleccionado.height}</Text>
          <Text style={estilos.tituloDetalles}>Peso: {pokemonSeleccionado.weight}</Text>
          <Text style={estilos.subtitulo}>Especie:</Text>
          <Text style={estilos.tituloDetalles}>{pokemonSeleccionado.descripcion}</Text>

          <Text style={estilos.subtitulo}>Movimientos:</Text>
          {pokemonSeleccionado.moves.slice(0, 4).map((move, index) => (
            <Text key={index} style={estilos.tituloDetalles}>{move.move.name}</Text>
          ))}
          <Button title="Regresar a la lista" onPress={() => setPokemonSeleccionado(null)} />
        </ScrollView>
      ) : (
                <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            // Extraemos el ID desde la URL del Pokémon
            const id = item.url.split('/')[6];

            return (
              <TouchableOpacity style={estilos.cardPokemon} onPress={() => obtenerDetallesPokemon(item.name, setPokemonSeleccionado, setCargando, setError)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image 
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }} 
                    style={estilos.miniImagen}
                  />
                  <Text style={estilos.pokemonNombre}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default PokemonApp;
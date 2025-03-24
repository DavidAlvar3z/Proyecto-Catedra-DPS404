import axios from 'axios';

export const obtenerPokemons = async (setPokemonList, setCargando, setError) => {
  setCargando(true);
  setError(null);
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
    setPokemonList(response.data.results);
  } catch {
    setError('No se pudo cargar la lista de Pokémon');
  } finally {
    setCargando(false);
  }
};
export const obtenerDetallesPokemon = async (nombrePokemon, setPokemonSeleccionado, setCargando, setError) => {
  setCargando(true);
  setError(null);
  try {
    const { data: pokemonData } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
    const { data: speciesData } = await axios.get(pokemonData.species.url);

    setPokemonSeleccionado({
      ...pokemonData,
      descripcion: speciesData.flavor_text_entries.find(entry => entry.language.name === 'es')?.flavor_text || 'Descripción no disponible',
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`
    });
  } catch {
    setError('No se pudo obtener detalles del Pokémon');
  } finally {
    setCargando(false);
  }
};
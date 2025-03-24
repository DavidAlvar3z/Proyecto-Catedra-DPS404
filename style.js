import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  cargandoContenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  cargandoTexto: {
    fontSize: 18,
    marginTop: 10,
    color: '#000',
  },
  errorContenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonNombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardPokemon: {
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  filaPokemon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniImagenPokemon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  scrollContenedor: {
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2c3e50',
  },
  tituloDetalles: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    color: '#34495e',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#2980b9',
  },
  imagenPokemon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    marginTop: 20,
  },
  miniImagen: {
    width: 50,
    height: 50,
    marginRight: 10,
  },  
});

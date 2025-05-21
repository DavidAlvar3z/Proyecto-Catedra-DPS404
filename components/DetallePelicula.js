import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, Linking } from "react-native";
import styles from "../styles/detalleStyles";
import { TMDB_API_KEY } from "@env";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function DetallePelicula({ movieId, onBack }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=es-ES&append_to_response=videos`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        color="#2C6156"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );

  if (!movie)
    return (
      <View style={styles.container}>
        <Text>No se encontró la película.</Text>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    );

  const trailer = movie.videos.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Botón fijo arriba */}
      <View style={{ padding: 10, backgroundColor: "#fff" }}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver al catálogo</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido scrollable */}
      <ScrollView style={styles.container}>
        <Text style={styles.releaseDate}>
          Fecha de lanzamiento: {new Date(movie.release_date).toLocaleDateString("es-ES")}
        </Text>
        <Image source={{ uri: IMAGE_BASE + movie.poster_path }} style={styles.poster} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.info}>Calificación: {movie.vote_average} ⭐</Text>
        <Text style={styles.info}>
          Edad recomendada: {movie.adult ? "18+" : "Apta para todo público"}
        </Text>
        <Text style={styles.subtitle}>Sinopsis</Text>
        <Text style={styles.overview}>{movie.overview || "No hay sinopsis disponible."}</Text>

        {trailer && (
          <>
            <Text style={styles.subtitle}>Tráiler</Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(`https://www.youtube.com/watch?v=${trailer.key}`)
              }
            >
              Ver en YouTube
            </Text>
          </>
        )}
      </ScrollView>
    </View>
  );
}
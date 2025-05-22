import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/detalleStyles";
import { TMDB_API_KEY } from "@env";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function DetallePelicula({ movieId, onBack, onComprar }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=es-ES`
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
        color="#3c7f72"
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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Image
          source={{ uri: IMAGE_BASE + movie.poster_path }}
          style={styles.poster}
        />

        <Text style={styles.title}>{movie.title}</Text>
        <Text style={[styles.info, { marginBottom: 12, fontStyle: "italic" }]}>
          Fecha de lanzamiento:{" "}
          {new Date(movie.release_date).toLocaleDateString("es-ES")}
        </Text>

        <Text style={styles.info}>Calificación: {movie.vote_average} ⭐</Text>
        <Text style={styles.info}>
          Edad recomendada: {movie.adult ? "18+" : "Apta para todo público"}
        </Text>

        <Text style={styles.subtitle}>Sinopsis</Text>
        <Text style={styles.overview}>
          {movie.overview || "No hay sinopsis disponible."}
        </Text>

        {/* Botón Comprar Ticket */}
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => onComprar(movie)} // Envía objeto completo
        >
          <Text style={styles.buyButtonText}>🎟️ Comprar Ticket</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver al catálogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

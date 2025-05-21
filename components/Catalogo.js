import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/catalogoStyles";

// Importa la API key desde .env
import { TMDB_API_KEY } from "@env";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function CatalogoPeliculas({ onLogout }) {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("userToken");
      if (!storedToken) {
        Alert.alert("No autorizado", "Por favor inicia sesión");
        onLogout();
      } else {
        setToken(storedToken);
      }
    }
    fetchToken();
  }, []);

  useEffect(() => {
    if (!token) return;

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=es-ES`)
      .then((res) => res.json())
      .then(async (data) => {
        setGenres(data.genres || []);
        let moviesObj = {};
        for (const genre of data.genres) {
          const moviesRes = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genre.id}&language=es-ES`
          );
          const moviesData = await moviesRes.json();
          moviesObj[genre.id] = moviesData.results || [];
        }
        setMoviesByGenre(moviesObj);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  async function handleLogout() {
    await AsyncStorage.removeItem("userToken");
    onLogout();
  }

  if (!token) {
    return (
      <View style={[styles.container, styles.loading]}>
        <Text style={{ color: "#2C6156", fontSize: 18, marginBottom: 20 }}>
          Por favor inicia sesión para ver el catálogo
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#2C6156",
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Ir a Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color="#2C6156" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
      >
        <Text style={styles.mainTitle}>Catálogo de Películas</Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#2C6156",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ backgroundColor: "#f9f9f9" }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {genres.map((genre) => (
          <View key={genre.id} style={styles.genreSection}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
            <FlatList
              data={moviesByGenre[genre.id]}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 15 }}
              renderItem={({ item }) => (
                <View style={styles.movieItem}>
                  {item.poster_path ? (
                    <Image
                      source={{ uri: IMAGE_BASE + item.poster_path }}
                      style={styles.moviePoster}
                      resizeMode="cover"
                    />
                  ) : (
                    <View style={[styles.moviePoster, styles.noImage]}>
                      <Text style={{ color: "#888" }}>Sin Imagen</Text>
                    </View>
                  )}
                  <Text style={styles.movieTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

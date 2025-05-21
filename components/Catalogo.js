import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import styles from "../styles/catalogoStyles";

// Importa la API key desde el .env
import { TMDB_API_KEY } from "@env";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function CatalogoPeliculas() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=es-ES`
    )
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
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color="#2C6156" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Catálogo de Películas</Text>
      <ScrollView>
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
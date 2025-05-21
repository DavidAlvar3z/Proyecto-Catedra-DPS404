import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const API_KEY = "2600c988d2e1fef2bdc914341668eaf0";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const windowWidth = Dimensions.get("window").width;

export default function CatalogoPeliculas() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then(async (data) => {
        setGenres(data.genres || []);
        let moviesObj = {};
        for (const genre of data.genres) {
          const moviesRes = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&language=es-ES`
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // fondo claro
    paddingTop: 40,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C6156", // color verde oscuro suave
    textAlign: "center",
    marginBottom: 15,
  },
  genreSection: {
    marginBottom: 25,
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333", // texto oscuro para contraste
    marginLeft: 15,
    marginBottom: 8,
  },
  movieItem: {
    marginRight: 15,
    width: windowWidth * 0.32,
    alignItems: "center",
  },
  moviePoster: {
    width: "100%",
    height: windowWidth * 0.48,
    borderRadius: 12,
    backgroundColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  noImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  movieTitle: {
    marginTop: 6,
    color: "#444",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
});

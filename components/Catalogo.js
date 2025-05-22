import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/catalogoStyles";
import DetallePelicula from "./DetallePelicula";
import { TMDB_API_KEY } from "@env";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function CatalogoPeliculas({ onLogout }) {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Para el menú desplegable
  const [menuVisible, setMenuVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then(async (data) => {
        setGenres(data.genres || []);
        let moviesObj = {};
        for (const genre of data.genres) {
          const moviesRes = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genre.id}&language=es-ES&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31`
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
    setTimeout(() => {
      onLogout();
    }, 0);
  } 

  function toggleMenu() {
    if (menuVisible) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }

  // Funciones para las opciones del menú
  function onPressCarrito() {
    Alert.alert("Carrito", "Aquí iría la pantalla de carrito");
    toggleMenu();
  }
  function onPressHistorial() {
    Alert.alert("Historial", "Aquí iría el historial de compras");
    toggleMenu();
  }
  function onPressCerrarSesion() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setMenuVisible(false);
      handleLogout();
    });
  }

  // Mostrar detalle si se seleccionó película
  if (selectedMovieId) {
    return (
      <DetallePelicula
        movieId={selectedMovieId}
        onBack={() => setSelectedMovieId(null)}
      />
    );
  }

  if (!token) {
    return (
      <View style={[styles.container, styles.loading]}>
        <Text style={styles.navbarTitle}>
          Por favor inicia sesión para ver el catálogo
        </Text>
        <TouchableOpacity onPress={handleLogout} style={styles.menuItemLast}>
          <Text style={[styles.menuItemText, { color: "#fff", fontWeight: "600" }]}>
            Ir a Login
          </Text>
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
      {/* Header con título y menú */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Catálogo de Películas</Text>

        {/* Botón menú hamburguesa */}
        <TouchableOpacity
          onPress={toggleMenu}
          style={styles.hamburgerButton}
          activeOpacity={0.7}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={[styles.hamburgerLine, { marginBottom: 0 }]} />
        </TouchableOpacity>
      </View>

      {/* Menú desplegable con fondo para cerrar al tocar fuera */}
      {menuVisible && (
        <View style={styles.menuOverlay}>
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <View style={styles.menuOverlayTouchable} />
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.menuContainer, { opacity: fadeAnim }]}>
            <TouchableOpacity onPress={onPressCarrito} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Carrito</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHistorial} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Historial de compras</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCerrarSesion} style={styles.menuItemLast}>
              <Text style={styles.menuItemTextLogout}>Cerrar sesión</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}

      {/* Contenido principal debajo del navbar */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
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
                <TouchableOpacity
                  style={styles.movieItem}
                  onPress={() => setSelectedMovieId(item.id)}
                  activeOpacity={0.7}
                >
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
                </TouchableOpacity>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

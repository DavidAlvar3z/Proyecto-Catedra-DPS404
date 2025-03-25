import React from "react";
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from "react-native";

const movies = new Array(12).fill({ title: "Titulo" });

export default function CatalogoPeliculas() {
  return (
    <ImageBackground source={require(".")} style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.divider} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Catalogo de películas</Text>
        <Image source={require(".")} style={styles.star} />
      </View>
      <View style={styles.divider} />
      <FlatList
        data={movies}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <View style={styles.moviePoster} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D14B28",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  time: {
    color: "#D1C5A3",
    fontSize: 18,
  },
  sync: {
    color: "#D1C5A3",
    fontSize: 18,
  },
  divider: {
    height: 8,
    backgroundColor: "#D1C5A3",
    marginVertical: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  star: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  gridContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  movieItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  moviePoster: {
    width: 80,
    height: 80,
    backgroundColor: "#A63A2A",
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 8,
    color: "white",
  },
});
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 40,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C6156",
    textAlign: "center",
    marginBottom: 15,
  },
  genreSection: {
    marginBottom: 25,
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
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

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  backButton: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#2C6156",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  poster: {
    width: width - 30,
    height: (width - 30) * 1.5,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#2C6156",
  },
  infoText: {
    fontSize: 14,
    marginBottom: 6,
  },
  overview: {
    fontSize: 16,
    marginBottom: 15,
    color: "#444",
  },
  trailerButton: {
    backgroundColor: "#2C6156",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  trailerButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});

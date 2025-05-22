import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 80, // espacio para botón fijo
  },
  backButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 24,
    right: 24,
    zIndex: 10,
  },
  backButton: {
    paddingVertical: 16,
    backgroundColor: "#3c7f72",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // para Android sombra
    transitionProperty: "background-color",
    transitionDuration: "200ms",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  poster: {
    width: width - 48,
    height: (width - 48) * 1.5,
    borderRadius: 16,
    marginBottom: 32,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
    color: "#992800",
    letterSpacing: 0.3,
  },
  info: {
    fontSize: 15,
    marginBottom: 10,
    color: "#666",
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#d34a24",
    marginBottom: 12,
  },
  overview: {
    fontSize: 17,
    marginBottom: 160, // espacio para el botón
    color: "#444",
    lineHeight: 24,
    fontWeight: "400",
  },
  link: {
    fontSize: 17,
    color: "#ffaf00",
    fontWeight: "700",
    textDecorationLine: "underline",
    marginBottom: 40,
  },
});

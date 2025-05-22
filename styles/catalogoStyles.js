import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 80,
  },

  loading: {
    justifyContent: "center",
    alignItems: "center",
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#992800",
    marginBottom: 32,
    letterSpacing: 0.3,
  },

  genreSection: {
    marginBottom: 30,
  },

  genreTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#d34a24",
    marginLeft: 15,
    marginBottom: 12,
  },

  movieItem: {
    marginRight: 15,
    width: windowWidth * 0.32,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3c7f72",
    borderRadius: 14,
    backgroundColor: "#f0f0f0",
    padding: 6,
    shadowColor: "#3c7f72",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  moviePoster: {
    width: "100%",
    height: windowWidth * 0.48,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
  },

  noImage: {
    justifyContent: "center",
    alignItems: "center",
  },

  movieTitle: {
    marginTop: 8,
    color: "#992800",
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.3,
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: "#cc4400",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#992800",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },

  buyButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 56,
    marginBottom: 20,
  },

  navbarTitle: {
    color: "#2C6156",
    fontWeight: "900",
    letterSpacing: 1,
    fontSize: 20,
    lineHeight: 24,
  },

  hamburgerButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },

  hamburgerLine: {
    width: 24,
    height: 3,
    backgroundColor: "#2C6156",
    marginBottom: 4,
    borderRadius: 1.5,
  },

  menuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1000,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 70,
    paddingRight: 15,
  },

  menuOverlayTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  menuContainer: {
    width: 180,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    paddingVertical: 0,
    zIndex: 1010,
  },

  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  menuItemLast: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#2C6156",
    borderRadius: 6,
  },

  menuItemText: {
    fontSize: 16,
    color: "#2C6156",
  },

  menuItemTextLogout: {
    fontSize: 16,
    fontWeight: "700",
    color: "#cc3d3d",
  },
});

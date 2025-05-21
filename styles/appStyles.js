import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#a63a00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 15,
    width: "70%",
  },
  registerButton: {
    backgroundColor: "#e05a00",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    color: "#000000",
    marginBottom: 25,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "600",
  },
});

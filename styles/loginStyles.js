import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 25,
  },
  inputContainer: {
    width: 270,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ff6600cc",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
    borderRadius: 10,
    color: "#fff",
    fontSize: 17,
  },
  button: {
    width: 200,
    paddingVertical: 11,
    borderRadius: 20,
    backgroundColor: "#cc4400",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  signUpButton: {
    width: 200,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#ff6b00",
    alignItems: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default loginStyles;
import { StyleSheet } from "react-native";

const registroStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 25,
    resizeMode: "contain",
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
  registerButton: {
    width: 200, 
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "#ff6b00",
    alignItems: "center",
  },
  loginButton: {
    width: 200, 
    paddingVertical: 11,
    borderRadius: 20,
    backgroundColor: "#cc4400",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  text: {
  marginTop: 20, 
  color: "#000000",
  fontSize: 14,
  marginBottom: 8,
  fontWeight: "600",
  },
});

export default registroStyles;

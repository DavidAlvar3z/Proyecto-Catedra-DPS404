import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";

import Catalogo from "./Catalogo"; // Asegúrate de que tienes un componente "Catalogo.js"

export default function LoginCredenciales({ goBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para cambiar de vista

  const handleLogin = () => {
    console.log("Username:", username, "Password:", password);
    setIsLoggedIn(true); // Cambia el estado para mostrar la vista de catálogo
  };

  // Si el usuario ha iniciado sesión, mostramos el catálogo
  if (isLoggedIn) {
    return <Catalogo />;
  }

  return (
    <ImageBackground
      source={require(".")} // Asegúrate de cambiar esto por la imagen correcta
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require("./assets/Logo.png")} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#E5DCC3"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#E5DCC3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={styles.signUpButton}>
          <Text style={styles.signUpText}>← SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 25,
    backgroundColor: "#2C6156",
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2C6156",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpButton: {
    marginTop: 20,
  },
  signUpText: {
    color: "#2C6156",
    fontSize: 16,
    fontWeight: "bold",
  },
});

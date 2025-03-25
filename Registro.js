import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Registro({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground 
      source={require(".")} 
      style={styles.container}
      resizeMode="cover"
    >
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, styles.inputField]} // Añadimos el color de fondo al input
      />
      <TextInput
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, styles.inputField]} // Añadimos el color de fondo al input
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[styles.input, styles.inputField]} // Añadimos el color de fondo al input
      />
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      
      <Text style={styles.text}>¿Ya tienes cuenta?</Text>
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.goBack()} // Regresar al Login
      >
        <Text style={styles.buttonText}>INICIA SESIÓN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 5,
    color: "white", // Color del texto dentro del campo
  },
  inputField: {
    backgroundColor: "#e05a00", // Color de fondo del campo de texto
  },
  registerButton: {
    backgroundColor: "#e05a00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#a63a00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    marginBottom: 10,
    fontSize: 16,
  },
});

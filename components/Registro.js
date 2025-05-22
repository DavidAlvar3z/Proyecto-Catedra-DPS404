import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  StyleSheet,
} from "react-native";
import styles from "../styles/registroStyles";

export default function Registro({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = async () => {
    try {
      const response = await fetch("http://192.168.68.102/PROYECTO-CATEDRA-DPS404/backend/registrar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo: email,
          nombre: username,
          contrasena: password,
        }),
      });
      const text = await response.text();
      const data = JSON.parse(text);

      if (data.success) {
        Alert.alert("Registro exitoso");
        navigation.goBack();
      } else {
        Alert.alert("Error", data.message || data.msg || "Error desconocido");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <ImageBackground
      source={require("../frontend/assets/Fondo.png")}
      style={styles.container}
      resizeMode="cover"  // Asegura que cubra TODO el fondo
    >
      <Image source={require("../frontend/assets/Logo.png")} style={styles.logo} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ffe8cc"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor="#ffe8cc"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ffe8cc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <Text style={styles.text}>¿Ya tienes cuenta?</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>INICIA SESIÓN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

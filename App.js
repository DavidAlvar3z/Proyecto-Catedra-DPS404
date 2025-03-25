<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
=======
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <ImageBackground source={require("./assets/Fondo.png")} style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>LOGIN</Text>
        <FontAwesome5 name="arrow-right" size={20} color="white" style={styles.icon} />
      </TouchableOpacity>
      
      <Text style={styles.text}>¿No tienes una cuenta?</Text>
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>REGÍSTRATE</Text>
      </TouchableOpacity>
    </ImageBackground>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,  // Ajusta según el tamaño de la imagen
    height: 150,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#a63a00",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#e05a00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    color: "black",
    marginBottom: 10,
    fontSize: 16,
  },
});
>>>>>>> Stashed changes

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Registro from "./Registro";
import LoginCredenciales from "./LoginCredenciales"; // Asegúrate de tener este archivo creado

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false); // Para determinar si estamos en el login o registro

  return (
    <ImageBackground source={require("./assets/Fondo.png")} style={styles.container}>
      {isLogin ? (
        <LoginCredenciales goBack={() => setIsLogin(false)} />
      ) : (
        <>
          {showLogin ? (
            <>
              <Image source={require("./assets/Logo.png")} style={styles.logo} />
              <TouchableOpacity style={styles.loginButton} onPress={() => setIsLogin(true)}>
                <Text style={styles.buttonText}>LOGIN</Text>
                <FontAwesome5 name="arrow-right" size={20} color="white" style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.text}>¿No tienes una cuenta?</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => setShowLogin(false)}
              >
                <Text style={styles.buttonText}>REGÍSTRATE</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Registro navigation={{ goBack: () => setShowLogin(true) }} />
          )}
        </>
      )}
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
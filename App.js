import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Registro from "./components/Registro";
import LoginCredenciales from "./components/Login";
import styles from "./styles/appStyles"; // Importamos los estilos desde archivo separado

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

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
              <TouchableOpacity style={styles.registerButton} onPress={() => setShowLogin(false)}>
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

import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, Alert } from "react-native";
import Catalogo from "./Catalogo";
import loginStyles from "../styles/loginStyles"; // Ajusta ruta según tu proyecto

export default function LoginCredenciales({ goBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    const response = await fetch("http://192.168.68.100/PROYECTO-CATEDRA-DPS404/backend/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
    } else {
      Alert.alert("Error", data.message);
    }
  };

  if (isLoggedIn) {
    return <Catalogo />;
  }

  return (
    <ImageBackground source={require("../assets/Fondo.png")} style={loginStyles.background}>
      <View style={loginStyles.container}>
        <Image source={require("../assets/Logo.png")} style={loginStyles.logo} />
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.input}
            placeholder="Username"
            placeholderTextColor="#E5DCC3"
            value={username}
            onChangeText={setUsername}
            maxLength={20}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            placeholderTextColor="#E5DCC3"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            maxLength={20}
          />
        </View>
        <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
          <Text style={loginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={loginStyles.signUpButton}>
          <Text style={loginStyles.signUpText}>← SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginStyles from "../styles/loginStyles";

export default function LoginCredenciales({ navigation, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://192.168.68.102/PROYECTO-CATEDRA-DPS404/backend/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();

      if (data.success) {
        await AsyncStorage.setItem("userToken", data.token);
        onLoginSuccess();
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <View style={styles.fullScreen}>
      <StatusBar barStyle="dark-content" backgroundColor="#efddc1" />
      <View style={loginStyles.container}>
        <Image
          source={require("../frontend/assets/Logo.png")}
          style={loginStyles.logo}
        />
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.input}
            placeholder="username"
            placeholderTextColor="#E5DCC3"
            value={username}
            onChangeText={setUsername}
            maxLength={20}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="password"
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
        <TouchableOpacity
          onPress={navigation.goBack}
          style={loginStyles.signUpButton}
        >
          <Text style={loginStyles.signUpText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#efddc1",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

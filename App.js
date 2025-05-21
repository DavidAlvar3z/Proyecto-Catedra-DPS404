import React, { useState } from "react";
import { View } from "react-native";

import Registro from "./components/Registro";
import LoginCredenciales from "./components/Login";
import CatalogoPeliculas from "./components/Catalogo";
import styles from "./styles/appStyles";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      {isLogin ? (
        <CatalogoPeliculas
          onLogout={() => {
            setIsLogin(false);
            setShowLogin(true);
          }}
        />
      ) : (
        <>
          {showLogin ? (
            <LoginCredenciales
              navigation={{ goBack: () => setShowLogin(false) }}
              onLoginSuccess={() => setIsLogin(true)}
            />
          ) : (
            <View style={styles.registroContainer}>
              <Registro navigation={{ goBack: () => setShowLogin(true) }} />
            </View>
          )}
        </>
      )}
    </View>
  );
}

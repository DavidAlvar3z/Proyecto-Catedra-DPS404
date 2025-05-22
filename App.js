import React, { useState } from "react";
import { View } from "react-native";

import Registro from "./components/Registro";
import LoginCredenciales from "./components/Login";
import CatalogoPeliculas from "./components/Catalogo";
import DetallePelicula from "./components/DetallePelicula";
import CompraTicket from "./components/CompraTicket"; 
import styles from "./styles/appStyles"; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  // NUEVOS ESTADOS para manejar vistas y película seleccionada
  const [vista, setVista] = useState("catalogo"); // "catalogo", "detalle", "compra"
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // Maneja cuando se selecciona una película en el catálogo
  const handleVerDetalle = (movieId) => {
    setPeliculaSeleccionada(movieId);
    setVista("detalle");
  };

  // Maneja la compra desde detalle
  const handleComprar = (movieData) => {
    setPeliculaSeleccionada(movieData);
    setVista("compra");
  };

  // Función para volver al catálogo desde detalle o compra
  const handleVolverCatalogo = () => {
    setVista("catalogo");
    setPeliculaSeleccionada(null);
  };

  if (!isLogin) {
    return (
      <View style={[styles.container, { flex: 1 }]}>
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
      </View>
    );
  }

  // Usuario logueado, controla las vistas
  return (
    <View style={[styles.container, { flex: 1 }]}>
      {vista === "catalogo" && (
        <CatalogoPeliculas
          onLogout={() => {
            setIsLogin(false);
            setShowLogin(true);
          }}
          onVerDetalle={handleVerDetalle} // PASA esta prop para abrir detalle
        />
      )}

      {vista === "detalle" && (
        <DetallePelicula
          movieId={peliculaSeleccionada}
          onBack={handleVolverCatalogo}
          onComprar={handleComprar} // aquí va la función que usa el botón comprar
        />
      )}

      {vista === "compra" && (
        <CompraTicket
          movie={peliculaSeleccionada}
          onBack={handleVolverCatalogo}
        />
      )}
    </View>
  );
}

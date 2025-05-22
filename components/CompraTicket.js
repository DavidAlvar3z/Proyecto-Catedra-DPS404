import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "../styles/compraStyles";

export default function CompraTicket({ movie, onBack }) {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [ticketType, setTicketType] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Simulación de asientos vendidos por sala
  // Puedes cambiar o ampliar esta estructura
  const [soldSeatsByRoom, setSoldSeatsByRoom] = useState({
    "Sala 1": ["A3", "B5", "C2", "D8", "E1"],
    "Sala 2": ["A1", "A2", "B3", "C7", "D5"],
    "Sala 3": ["B1", "B2", "C3", "D4", "E5"],
  });

  // Definir asientos disponibles: 5 filas (A-E), 8 columnas (1-8)
  const seats = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) => `${String.fromCharCode(65 + row)}${col + 1}`)
  );

  // Lista de salas
  const rooms = Object.keys(soldSeatsByRoom);

  const handleSelectSeat = (seat) => {
    if (!selectedRoom) {
      Alert.alert("Selecciona una sala primero", "Debes elegir una sala para ver los asientos disponibles.");
      return;
    }
    if (soldSeatsByRoom[selectedRoom].includes(seat)) {
      Alert.alert("Asiento no disponible", `El asiento ${seat} en ${selectedRoom} ya está vendido.`);
      return;
    }
    setSelectedSeat(seat);
  };

  const handleConfirm = () => {
    if (!selectedRoom) {
      Alert.alert("Completa los datos", "Selecciona una sala.");
      return;
    }
    if (!selectedSeat || !ticketType) {
      Alert.alert("Completa los datos", "Selecciona un asiento y tipo de boleto.");
      return;
    }
    // Añadir asiento vendido a la sala correspondiente
    setSoldSeatsByRoom((prev) => ({
      ...prev,
      [selectedRoom]: [...prev[selectedRoom], selectedSeat],
    }));

    Alert.alert(
      "Compra exitosa",
      `Has comprado un ticket para ${movie.title}\nSala: ${selectedRoom}\nAsiento: ${selectedSeat}\nTipo: ${ticketType}`
    );

    // Reiniciar selección
    setSelectedSeat(null);
    setTicketType(null);
    setSelectedRoom(null);

    onBack(); // Volver después de la compra
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.subtitle}>Selecciona la sala:</Text>
      <View style={styles.ticketTypeContainer}>
        {rooms.map((room) => (
          <TouchableOpacity
            key={room}
            style={[
              styles.ticketTypeButton,
              selectedRoom === room && styles.selectedTicketType,
            ]}
            onPress={() => {
              setSelectedRoom(room);
              setSelectedSeat(null); // limpiar asiento cuando cambias sala
            }}
          >
            <Text style={styles.ticketTypeText}>{room}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedRoom && (
        <>
          <Text style={styles.subtitle}>Selecciona tu asiento en {selectedRoom}:</Text>
          <View style={styles.seatMap}>
            {seats.map((row, i) => (
              <View key={i} style={styles.seatRow}>
                {row.map((seat) => {
                  const isSold = soldSeatsByRoom[selectedRoom].includes(seat);
                  const isSelected = selectedSeat === seat;

                  return (
                    <TouchableOpacity
                      key={seat}
                      disabled={isSold}
                      style={[
                        styles.seat,
                        isSelected && styles.selectedSeat,
                        isSold && styles.soldSeat,
                      ]}
                      onPress={() => handleSelectSeat(seat)}
                    >
                      <Text
                        style={[
                          styles.seatText,
                          isSold && styles.soldSeatText,
                          isSelected && styles.selectedSeatText,
                        ]}
                      >
                        {seat}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </>
      )}

      <Text style={styles.subtitle}>Tipo de boleto:</Text>
      <View style={styles.ticketTypeContainer}>
        {["Adulto", "Joven", "Niño"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.ticketTypeButton,
              ticketType === type && styles.selectedTicketType,
            ]}
            onPress={() => setTicketType(type)}
          >
            <Text style={styles.ticketTypeText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar Compra</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import { StyleSheet } from "react-native";

const compraStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#efddc1",
    flexGrow: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    color: "#444",
  },
  seatMap: {
    marginBottom: 20,
  },
  seatRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  seat: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 4,
    borderRadius: 6,
  },
  selectedSeat: {
    backgroundColor: "#3c7f72",
  },
  seatText: {
    color: "#fff",
    fontWeight: "bold",
  },
  ticketTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  ticketTypeButton: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 10,
  },
  selectedTicketType: {
    backgroundColor: "#3c7f72",
  },
  ticketTypeText: {
    color: "#fff",
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#cc4400",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

export default compraStyles;
 
import { StyleSheet } from "react-native";

export const corteTaladroDesbasteStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  sidebar: {
    width: 260,
    marginRight: 16,
  },
  mainContent: {
    flex: 1,
  },
  estadoBox: {
    paddingBottom: 12,
    paddingHorizontal: 4,
  },
  estadoFiltro: {
    color: "#666",
    fontSize: 13,
  },
  productosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
  },
  emptyContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  emptyText: {
    textAlign: "center",
    color: "#555",
    fontSize: 15,
    marginBottom: 14,
  },
});

export const corteTaladroDesbasteCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    height: 280,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "#333",
    height: 40,
  },
  price: {
    color: "#d32f2f",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
    minWidth: 100,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "#111",
  },
  closeBtnCard: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeBtnCardText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
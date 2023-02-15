import { StyleSheet } from "react-native";
import { Colors } from "../../consts/Colors";

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
    },
    headerText: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    },
    infoSection: {},
    valueText: {
      fontSize: 22,
      fontWeight: "500",
      textAlign: "center",
    },
    button: {
      borderRadius: 20,
      padding: 10,
      width: "100%",
    },
    buttonOpen: {
      marginTop: 20,
      backgroundColor: Colors.mainColor,
    },
    buttonDisabled: {
      backgroundColor: "gray",
      opacity: 0.5,
    },
    buttonClose: {
      marginTop: 10,
      backgroundColor: Colors.cancelColor,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 5,
      fontSize: 20,
      textAlign: "center",
    },
    inputArea: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    swichSection: {
      width: "50%",
    },
    textInput: {
      width: "50%",
      height: 40,
      margin: 12,
      padding: 10,
      borderBottomColor: Colors.mainColor,
      borderBottomWidth: 1,
    },
    priceArea: {},
    priceText: {
      fontSize: 18,
      textAlign: "center",
    },
    priceValue: {
      fontSize: 22,
      textAlign: "center",
      fontWeight: "500",
      backgroundColor: Colors.attentionColor,
      borderRadius: 5,
      padding: 10,
    },
    priceTextError: {
      fontSize: 20,
      textAlign: "center",
      color: "red",
    },
  });
  
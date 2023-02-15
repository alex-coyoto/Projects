import { StyleSheet } from "react-native";
import { Colors } from "../../consts/Colors";

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: Colors.mainColor,
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });
  
import { StyleSheet } from "react-native";
import { Colors } from "../../consts/Colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  courceText: {
    fontSize: 24,
  },
  courceValue: {
    fontSize: 48,
    fontWeight: "700",
    color: Colors.mainColor,
    textAlign: 'center'
  },
  dateText: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  errorMessageText: {
    fontSize: 24,
    color: Colors.cancelColor,
    textAlign: "center",
  },
  refreshButton: {
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
  },
});
  
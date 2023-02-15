import { Pressable, Text, View } from "react-native";
import { styles } from "./ButtonSection.styles";

export default function ButtonSection(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, props.disabledStyle]}
        onPress={props.onCharge}
      >
        <Text style={styles.buttonText}>Exchange</Text>
      </Pressable>
    </View>
  );
}

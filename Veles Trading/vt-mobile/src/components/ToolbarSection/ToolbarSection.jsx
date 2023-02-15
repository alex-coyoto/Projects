import { Image, Text, View } from "react-native";
import { styles } from "./ToolbarSections.styles";
import React from "react";
import { useFonts } from "expo-font";

export default function ToolbarSection(props) {
  const [loaded] = useFonts({
    "custom-title-font": require("../../../assets/fonts/title-font.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={[styles.container, props.disabledStyle]}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.image}
      />
      <Text style={[styles.title, { fontFamily: "custom-title-font" }]}>
        Veles Trading
      </Text>
    </View>
  );
}

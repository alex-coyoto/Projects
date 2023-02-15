import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import PriceHelper from "../../utils/PriceHelper";
import { styles } from "./PriceSection.styles";

export default function PriceSection(props) {
  return (
    <View style={[styles.container, props.disabledStyle]}>
      <Text style={styles.courceText}>Current BTC/USDT rate is</Text>
      {props.errorMessage ? (
        <View>
          <Text style={styles.errorMessageText}>
            Something went wrong on the server
          </Text>
          <Text style={styles.errorMessageText}>{props.errorMessage}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.courceValue}>
            {props.currentCource
              ? PriceHelper.formatPrice(props.currentCource)
              : "Connecting..."}
          </Text>
          <Text style={styles.dateText}>
            {props.lastUpdateDate ? `Last update: ${props.lastUpdateDate}` : ""}
          </Text>
        </View>
      )}
      <View style={styles.refreshButton}>
        <Pressable onPress={props.onRefresh}>
          <Image
            source={require("../../../assets/reload256.png")}
            style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  );
}

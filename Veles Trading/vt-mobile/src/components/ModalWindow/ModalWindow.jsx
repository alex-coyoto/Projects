import { Modal, Pressable, Text, TextInput, View } from "react-native";
import PriceHelper from "../../utils/PriceHelper";
import SwitchSelector from "react-native-switch-selector";
import { Colors } from "../../consts/Colors";
import React from "react";
import { Currencies } from "../../consts/Currencies";
import { styles } from "./ModalWindow.styles";

export default function ModalWindow(props) {
  const [inputText, setInputText] = React.useState("");
  const [switchValue, setSwitchValue] = React.useState(switchOptions[0].value);
  const [convertedPrice, setConvertedPrice] = React.useState(undefined);
  const [convertedCurrency, setConvertedCurrency] = React.useState("");
  const [isConverDisabled, setIsConverDisabled] = React.useState(true);

  React.useMemo(() => {
    const value = PriceHelper.getNumberFromString(inputText);
    if (value) {
      setIsConverDisabled(false);
      switch (switchValue) {
        case Currencies.BTC:
          setConvertedPrice(
            PriceHelper.convertBtcToUsdt(value, props.currentCource)
          );
          setConvertedCurrency(Currencies.USDT);
          break;
        case Currencies.USDT:
          setConvertedPrice(
            PriceHelper.convertUsdtToBtc(value, props.currentCource)
          );
          setConvertedCurrency(Currencies.BTC);
          break;
      }
    } else {
      setConvertedPrice(undefined);
      setIsConverDisabled(true);
    }
  }, [inputText, switchValue]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.headerText}>Currency exchange</Text>
          <View style={styles.infoSection}>
            <Text style={styles.modalText}>Current BTC/USDT rate is </Text>
            <Text style={styles.valueText}>
              {PriceHelper.formatPrice(props.currentCource)}
            </Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              placeholder="1.0"
            />
            <SwitchSelector
              options={switchOptions}
              initial={0}
              onPress={(value) => {
                setSwitchValue(value);
              }}
              style={[styles.swichSection]}
            />
          </View>
          <View style={styles.priceArea}>
            {convertedPrice ? (
              <View>
                <Text style={styles.priceText}>You will receive</Text>
                <Text style={styles.priceValue}>
                  {`${PriceHelper.formatPrice(
                    convertedPrice
                  )} ${convertedCurrency}`}
                </Text>
              </View>
            ) : (
              <Text style={styles.priceTextError}>Invalid value</Text>
            )}
          </View>
          <Pressable
            style={[
              styles.button,
              styles.buttonOpen,
              isConverDisabled ? styles.buttonDisabled : {},
            ]}
            onPress={() => (!isConverDisabled ? props.onHide() : null)}
          >
            <Text style={styles.textStyle}>Exchange</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={props.onHide}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const switchOptions = [
  {
    label: Currencies.BTC,
    value: Currencies.BTC,
    activeColor: Colors.mainColor,
  },
  {
    label: Currencies.USDT,
    value: Currencies.USDT,
    activeColor: Colors.mainColor,
  },
];

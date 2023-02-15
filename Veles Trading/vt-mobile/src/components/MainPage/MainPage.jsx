import React from "react";
import { SafeAreaView, View } from "react-native";
import { Colors } from "../../consts/Colors";
import DateHelper from "../../utils/DateHelper";
import PriceHelper from "../../utils/PriceHelper";
import ButtonSection from "../ButtonSection/ButtonSection";
import ModalWindow from "../ModalWindow/ModalWindow";
import PriceSection from "../PriceSection/PriceSection";
import ToolbarSection from "../ToolbarSection/ToolbarSection";
import { styles } from "./MainPage.styles";

export default function MainPage() {
  const [currentCource, setCurrentCource] = React.useState(null);
  const [lastUpdateDate, setLastUpdateDate] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [disabledMode, setDisabledMode] = React.useState({});
  const [disabledStyle, setDisabledStyle] = React.useState({});

  const getCurrentCource = () => {
    setErrorMessage("");
    PriceHelper.getCource().then(
      (value) => {
        setCurrentCource(value);
        setLastUpdateDate(DateHelper.formatDate(new Date()));
      },
      (err) => {
        setErrorMessage(err.message);
        setCurrentCource(null);
        setLastUpdateDate("");
      }
    );
  };

  React.useEffect(() => {
    getCurrentCource();
  }, []);

  React.useMemo(() => {
    if (modalVisible) {
      if (!currentCource) {
        setModalVisible(false);
      }
      getCurrentCource();
      setDisabledMode({ backgroundColor: Colors.disabledColor });
      setDisabledStyle({ opacity: 0.3 });
    } else {
      setDisabledMode({});
      setDisabledStyle({});
    }
  }, [modalVisible]);

  return (
    <SafeAreaView style={[styles.container, disabledMode]}>
      <ToolbarSection disabledStyle={disabledStyle} />
      <View style={styles.devider} />
      <PriceSection
        currentCource={currentCource}
        errorMessage={errorMessage}
        lastUpdateDate={lastUpdateDate}
        onRefresh={getCurrentCource}
        disabledStyle={disabledStyle}
      />
      <ButtonSection
        onCharge={() => setModalVisible(true)}
        disabledStyle={disabledStyle}
      />
      <ModalWindow
        modalVisible={modalVisible}
        onHide={() => setModalVisible(false)}
        currentCource={currentCource}
      />
    </SafeAreaView>
  );
}

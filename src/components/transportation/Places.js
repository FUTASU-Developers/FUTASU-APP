import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Places = (props) => {
  const [active, setActive] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: "#A2296E",
  };

  const HandlePress = () => {
    setActive(!active);

    // props.press();
  };
  return (
    <TouchableHighlight
      {...touchProps}
      onPress={() => HandlePress()}
      style={{ marginHorizontal: 10 }}
    >
      <View
        style={{
          borderColor: "#4D4351",
          borderWidth: 0.5,
          borderRadius: 3,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{ textAlign: "center", fontFamily: "SfPro", fontSize: 15 }}
        >
          ALUTA
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  textPress: {
    color: "white",
  },
});

export default Places;

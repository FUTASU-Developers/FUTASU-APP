import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const AppButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: "#A2296E",
          height: 48,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "#FFFEFE",
          fontFamily: "SfProBold",
          fontSize: 14,
          letterSpacing: 1,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

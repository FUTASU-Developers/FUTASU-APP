import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import { scale } from "react-native-size-matters";
const { width, height } = Dimensions.get("window");

export const Tile = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFEFE",
          width: width / 2.45,
          height: width / 2.45,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#D6D6D6",
        },
        props.style,
      ]}
    >
      <View>
        <Image
          source={props.image}
          style={{ height: 80, width: 80, alignSelf: "center" }}
          alt="tile"
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "SfProBold",
            fontSize: scale(13),
            marginTop: 10,
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

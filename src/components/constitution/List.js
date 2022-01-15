import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const List = (props) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "90%",
          backgroundColor: "#fff",
          marginVertical: 2,
          alignItems: "flex-start",
        },
        props.style,
      ]}
    >
      <Text style={{ fontSize: 18, flex: 1 }}>
        {props.listStyle ? props.listStyle : "●"}
      </Text>
      <Text
        style={{ fontFamily: "SfPro", fontSize: 18, lineHeight: 30, flex: 20 }}
      >
        {props.children}
      </Text>
    </View>
  );
};

export default List;

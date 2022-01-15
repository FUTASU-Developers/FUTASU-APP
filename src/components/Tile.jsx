import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const Tile = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={props.image} alt="tile" />
        <Text style={{ textAlign: "center" }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

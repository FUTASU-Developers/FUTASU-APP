import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import TopStack from "../topStack";
import { EvilIcons } from "@expo/vector-icons";

const Article = (props) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff", height: "100%" }}>
      <TopStack
        title={props.title}
        navigate={props.navigate}
        next={props.next}
      />
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        {props.children}
      </View>
    </ScrollView>
  );
};

export default Article;

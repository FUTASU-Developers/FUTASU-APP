import { View, Text } from "react-native";
import React from "react";

const Location = (props) => {
  return (
    <View style={{ alignItems: "center", marginTop: 35 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "88%",
          borderColor: "#D6D6D6",
          borderWidth: 1,
          borderStyle: "solid",
          paddingVertical: 15,
          paddingHorizontal: 15,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <View>
          {props.location ? (
            <Text
              style={{ fontSize: 13, paddingBottom: 5, fontFamily: "SfPro" }}
            >
              Current/Pickup Location
            </Text>
          ) : null}
          <Text
            style={{
              fontFamily: "SfPro",
              fontSize: 18,
              color: props.location ? "#220917" : "#878385",
            }}
          >
            {props.location ? props.location : "Current/Pickup Location"}
          </Text>
        </View>

        {props.icon}
      </View>
    </View>
  );
};

export default Location;

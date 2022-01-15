import React from "react";
import { View, TextInput, Text, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import Location from "../../components/transportation/Location";
import { MaterialIcons } from "@expo/vector-icons";
import Places from "../../components/transportation/Places";

const TransportationLanding = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          width: "88%",
          alignSelf: "center",
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Icon
            size={28}
            color="black"
            name="ios-chevron-back"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View>
          <Text style={{ fontSize: 23, fontFamily: "SfPro" }}>
            Request keke
          </Text>
        </View>

        <View>
          <Entypo
            name="back-in-time"
            size={26}
            color="black"
            onPress={() => navigation.navigate("HistoryPage")}
          />
        </View>
      </View>

      <Location
        // location="SUB"
        icon={<MaterialIcons name="my-location" size={24} color="black" />}
      />

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View
          style={{ width: "88%", paddingHorizontal: 10, flexDirection: "row" }}
        >
          <Places />
          <Places />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({});

export default TransportationLanding;

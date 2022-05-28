import React from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import TopStack from "../../components/topStack";
import { Tile } from "../../components/Tile";

const EmergencyLanding = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TopStack title="Emergency List" navigate={() => navigation.goBack()} />

      <View
        style={{
          width: "88%",
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Tile
            title="Theft"
            image={require("../../assets/Images/Theft.png")}
          />
          <Tile
            title="Fire Accident"
            image={require("../../assets/Images/Fire.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Tile
            title="Harassment"
            image={require("../../assets/Images/Harassment.png")}
          />
          <Tile
            style={{ backgroundColor: "#FFF3FD" }}
            title="Custom Emergency"
            image={require("../../assets/Images/Custom.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default EmergencyLanding;

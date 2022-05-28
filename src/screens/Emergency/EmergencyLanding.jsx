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
          marginTop: verticalScale(30),
        }}
      >
        <View>
          <Tile
            title="Theft"
            image={require("../../assets/Images/Theft.png")}
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

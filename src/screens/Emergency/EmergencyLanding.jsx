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
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import TopStack from "../../components/topStack";
import { Tile } from "../../components/Tile";

const EmergencyLanding = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TopStack
        title="Emergency Details"
        navigate={() => navigation.goBack()}
      />

      <View>
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

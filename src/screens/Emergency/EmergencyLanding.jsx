import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import TopStack from "../../components/topStack";
import { Tile } from "../../components/Tile";
import { useNavigation } from "@react-navigation/native";

const EmergencyLanding = ({ navigation }) => {
  const { navigate } = useNavigation();
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
            onPress={() => navigate("EmergencyDetails", { type: "theft" })}
            title="Theft"
            image={require("../../assets/Images/Theft.png")}
          />
          <Tile
            onPress={() => navigate("EmergencyDetails", { type: "fire" })}
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
            onPress={() => navigate("EmergencyDetails", { type: "harrasment" })}
            title="Harassment"
            image={require("../../assets/Images/Harassment.png")}
          />
          <Tile
            onPress={() => navigate("EmergencyDetails", { type: null })}
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

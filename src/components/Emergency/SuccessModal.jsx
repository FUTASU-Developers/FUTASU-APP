import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { scale } from "react-native-size-matters";

const SuccessModal = (props) => {
  return (
    <Modal animationType="slide" transparent visible={props.visible}>
      <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 30 }}>
        <View style={{ width: "88%", alignSelf: "center", flex: 1 }}>
          <View>
            <Pressable onPress={() => props.setVisible(false)}>
              <Image
                source={require("../../assets/Images/close.png")}
                style={{ height: 21, width: 21 }}
              />
            </Pressable>
          </View>

          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/Images/su.png")}
              style={{ width: 80, height: 80, marginBottom: 30 }}
            />
            <Text
              style={{
                fontFamily: "SfProBold",
                fontSize: 24,
                textAlign: "center",
                width: 328,
              }}
            >
              Your request has been forwarded to the neccessary department, We
              will get in contact with you soon.{" "}
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontFamily: "SfProBold", fontSize: scale(13) }}>
              🚨🚓 Help is on the way{" "}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

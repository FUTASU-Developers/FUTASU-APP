import React from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";

const TopStack = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
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
            size={35}
            color="#4D4351"
            name="ios-chevron-back"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "SfPro",
              color: "#4D4351",
              textAlign: "center",
            }}
          >
            {props.title}
          </Text>
        </View>

        <View>
          {props.next ? (
            <Icon
              size={35}
              color="#4D4351"
              name="ios-chevron-forward"
              onPress={() => navigation.navigate(props.next)}
            />
          ) : (
            <Icon size={35} color="#FFF" name="ios-chevron-forward" />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  iconContainer: {
    paddingLeft: 10,
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  icon: {
    marginLeft: "5@s",
    backgroundColor: "#fff",
    color: "#220917",
    fontSize: 35,
  },
  topText: {
    backgroundColor: "#fff",
    flex: 5,
    fontSize: 23,
    fontFamily: "SfPro",
    textAlign: "center",
  },
});

export default TopStack;

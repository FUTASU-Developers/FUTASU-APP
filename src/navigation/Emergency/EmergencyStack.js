import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EmergencyLanding from "../../screens/Emergency/EmergencyLanding";
import EmergencyDetails from "../../screens/Emergency/EmergencyDetails";

const Stack = createStackNavigator();

const EmergencyStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="EmergencyLanding"
    >
      <Stack.Screen name="EmergencyLanding" component={EmergencyLanding} />
      <Stack.Screen name="EmergencyDetails" component={EmergencyDetails} />
    </Stack.Navigator>
  );
};

export default EmergencyStack;

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ConstitutionLanding from "../../screens/Constitution/ConstitutionLanding";
import Introduction from "../../screens/Constitution/IntroductionPage";
import Article1 from "../../screens/Constitution/Article1.jsx";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createMaterialTopTabNavigator();

const ConstitutionStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { height: "0%" } }}
      initialRouteName="ConstitutionLanding"
    >
      <Stack.Screen
        name="ConstitutionLanding"
        component={ConstitutionLanding}
      />

      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Article I" component={Article1} />
    </Stack.Navigator>
  );
};

export default ConstitutionStack;

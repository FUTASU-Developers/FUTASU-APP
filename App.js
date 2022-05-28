import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// Stack
import AlphaStack from "./src/navigation/Alpha/AlphaStack";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Load font Async
const getFonts = () =>
  Font.loadAsync({
    poppins: require("./src/assets/Fonts/Poppins-Bold.ttf"),
    Circular: require("./src/assets/Fonts/Circular.ttf"),
    Proxima: require("./src/assets/Fonts/ProximaSoft-ExtraBold.ttf"),
    SfPro: require("./src/assets/Fonts/SFProDisplay-Regular.ttf"),
    SfProBold: require("./src/assets/Fonts/sfprobold.ttf"),
  });

const App = () => {
  const [loadFont, setLoadFont] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  if (loadFont) {
    return <AlphaStack />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoadFont(true)}
        onError={console.warn}
      />
    );
  }
};

export default App;

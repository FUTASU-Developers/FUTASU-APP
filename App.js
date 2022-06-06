<<<<<<< onboarding
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';


// Stack
import AlphaStack from './src/navigation/Alpha/AlphaStack';
import OnboardScreen from './src/components/Onboarding/OnboardScreen';
import OnboardingStack from './src/navigation/Onboarding/OnboardingStack';
=======
import React, { useState, useRef, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// Stack
import AlphaStack from "./src/navigation/Alpha/AlphaStack";
import * as Notifications from "expo-notifications";
>>>>>>> develop

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
<<<<<<< onboarding
  const [loadFont, setLoadFont] = useState(false);

  if(loadFont){
      return (
        <NavigationContainer>
            {/* <AlphaStack /> */}
            <OnboardingStack />
        </NavigationContainer>
       )
  }else{
      return (
            <AppLoading 
                startAsync={getFonts}
                onFinish={ () => setLoadFont(true)}
                onError={console.warn}
            />
        )
=======
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        getFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
>>>>>>> develop
  }

  return <AlphaStack />;
};

export default App;

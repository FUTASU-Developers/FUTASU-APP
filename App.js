import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';


// Stack
import AlphaStack from './src/navigation/Alpha/AlphaStack';
import OnboardScreen from './src/components/Onboarding/OnboardScreen';
import OnboardingStack from './src/navigation/Onboarding/OnboardingStack';

// Load font Async
const getFonts = () => Font.loadAsync({
    'poppins': require('./src/assets/Fonts/Poppins-Bold.ttf'),
    'Circular': require('./src/assets/Fonts/Circular.ttf'),
    'Proxima': require('./src/assets/Fonts/ProximaSoft-ExtraBold.ttf')
});


const App = () => {
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
  }
}


export default App ;
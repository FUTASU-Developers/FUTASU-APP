import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


// Stack
import AlphaStack from './src/navigation/Alpha/AlphaStack';

// Load font Async
const getFonts = () => Font.loadAsync({
    'poppins': require('./src/assets/Fonts/Poppins-Bold.ttf'),
    'Circular': require('./src/assets/Fonts/Circular.ttf'),
    'Proxima': require('./src/assets/Fonts/ProximaSoft-ExtraBold.ttf'),
    'SfPro':require('./src/assets/Fonts/SFProDisplay-Regular.ttf')
});


const App = () => {
  const [loadFont, setLoadFont] = useState(false);

  if(loadFont){
      return (
        <AlphaStack />
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
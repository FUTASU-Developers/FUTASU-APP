import React from 'react' ;
import { createStackNavigator } from '@react-navigation/stack';

// screens
import OnboardScreen from '../../components/Onboarding/OnboardScreen';
import SignUp from '../../components/Auth/SignUp/SignUp';
import SignIn from '../../components/Auth/SignIn/SignIn';
import Verify from '../../components/Auth/SignIn/Verify';
import ChangePwd from '../../components/Auth/SignIn/ChangePwd';

const Stack = createStackNavigator() ;

const OnboardingStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="OnboardScreen" >
            <Stack.Screen name="OnboardScreen" component={OnboardScreen} />  
            <Stack.Screen name="SignUp" component={SignUp} />  
            <Stack.Screen name="SignIn" component={SignIn} />  
            <Stack.Screen name="Verify" component={Verify} />  
            <Stack.Screen name="ChangePwd" component={ChangePwd} />  
        </Stack.Navigator>
    )
 };

export default OnboardingStack ;
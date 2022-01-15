import React from 'react' ;
import { createStackNavigator } from '@react-navigation/stack';

// screens
import OnboardScreen from '../../components/Onboarding/OnboardScreen';
import SignUp from '../../components/Auth/SignUp/SignUp';
import SignIn from '../../components/Auth/SignIn/SignIn';

const Stack = createStackNavigator() ;

const OnboardingStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="OnboardScreen" >
            <Stack.Screen name="OnboardScreen" component={OnboardScreen} />  
            <Stack.Screen name="SignUp" component={SignUp} />  
            <Stack.Screen name="SignIn" component={SignIn} />  
        </Stack.Navigator>
    )
 };

export default OnboardingStack ;
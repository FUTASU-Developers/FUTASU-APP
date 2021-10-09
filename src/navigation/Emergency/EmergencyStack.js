import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import EmergencyLanding from '../../screens/Emergency/EmergencyLanding';

const Stack = createStackNavigator() ;

const EmergencyStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="EmergencyLanding" >
            <Stack.Screen name="EmergencyLanding" component={EmergencyLanding} />  
        </Stack.Navigator>
    )
 };

export default EmergencyStack ;
import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import TransportationLanding from '../../screens/Transportation/TransportationLanding';

const Stack = createStackNavigator() ;

const TransportationStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="TransportationLanding" >
            <Stack.Screen name="TransportationLanding" component={TransportationLanding} />  
        </Stack.Navigator>
    )
 };

export default TransportationStack ;
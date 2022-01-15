import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import TransportationLanding from '../../screens/Transportation/TransportationLanding';
import HistoryPage from '../../screens/Transportation/HistoryPage';

const Stack = createStackNavigator() ;

const TransportationStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="TransportationLanding" >
            <Stack.Screen name="TransportationLanding" component={TransportationLanding} /> 
            <Stack.Screen name='HistoryPage' component={HistoryPage}/>
        </Stack.Navigator>
    )
 };

export default TransportationStack ;
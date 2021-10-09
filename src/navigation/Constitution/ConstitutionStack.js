import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import ConstitutionLanding from '../../screens/Constitution/ConstitutionLanding';

const Stack = createStackNavigator() ;

const ConstitutionStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="ConstitutionLanding" >
            <Stack.Screen name="ConstitutionLanding" component={ConstitutionLanding} />  
        </Stack.Navigator>
    )
 };

export default ConstitutionStack ;
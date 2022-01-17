import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import Alpha from '../../screens/Alpha';
import ConstitutionStack from '../Constitution/ConstitutionStack'
import ELibraryStack from '../ELibrary/ELibraryStack';
import EmergencyStack from '../Emergency/EmergencyStack';
import TransportationStack from '../Transportation/TransportationStack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator() ;

const AlphaStack = ({ navigation }) => {
    return (
        // <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Alpha" >
                <Stack.Screen name="Alpha" component={Alpha} />  
                <Stack.Screen name="ConstitutionStack" component={ConstitutionStack} />  
                <Stack.Screen name="ELibraryStack" component={ELibraryStack} />  
                <Stack.Screen name="EmergencyStack" component={EmergencyStack} />  
                <Stack.Screen name="TransportationStack" component={TransportationStack} />  
            </Stack.Navigator>
        // </NavigationContainer>
    )
 };

export default AlphaStack ;
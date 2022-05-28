import React from 'react' ;
import { View, Text } from 'react-native' ;
import { createStackNavigator } from '@react-navigation/stack';
import ELibraryLanding from '../../screens/ELibrary/ELibraryLanding';

const Stack = createStackNavigator() ;

const ELibraryStack = ({ navigation }) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="ELibraryLanding" >
            <Stack.Screen name="ELibraryLanding" component={ELibraryLanding} />  
        </Stack.Navigator>
    )
 };

export default ELibraryStack ;
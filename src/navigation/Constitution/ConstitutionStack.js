import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ConstitutionLanding from '../../screens/Constitution/ConstitutionLanding';
import Introduction from '../../screens/Constitution/IntroductionPage';
import Article1 from '../../screens/Constitution/Article1.jsx'
const Tab = createMaterialTopTabNavigator();

const ConstitutionTop = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { display: "none" } }} initialRouteName="ConstitutionLanding" >
            <Tab.Screen name="ConstitutionLanding" component={ConstitutionLanding} />
            <Tab.Screen name="Introduction" component={Introduction} />
            <Tab.Screen name="Article I" component={Article1} />
        </Tab.Navigator>
    )
};

export default ConstitutionTop;

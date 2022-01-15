import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import TopStack from '../../components/topStack';

const TransportationLanding = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TopStack title='Request Keke' navigate={() => navigation.goBack()} />
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({

})

export default TransportationLanding;

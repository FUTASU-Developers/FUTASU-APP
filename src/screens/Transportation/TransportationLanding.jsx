import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text } from 'react-native';
import { scale , ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const TransportationLanding = ({ navigation }) => {
    return (
        <View style={{ flex: 1}}>
             <View style={styles.topBar}>
                <Icon name="ios-chevron-back" style={styles.topIcon}  onPress={ () => navigation.goBack()}  />
                <Text style={styles.topText}>  Request Keke </Text> 
             </View> 
        </View>
    )
}

const styles = ScaledSheet.create({
    topBar: { paddingTop: '50@s', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', paddingHorizontal: 15, elevation: 10, paddingVertical: '9@s', elevation: 10},
    topIcon: { marginLeft: '5@s', color: '#3a3b3c', fontSize: '32@s'},
    topText: {fontFamily: 'Proxima', fontSize: '22@s', color: '#3a3b3c', textAlign: 'center'}
})

export default TransportationLanding;

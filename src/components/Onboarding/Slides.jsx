import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {OnboardingData}  from './OnboardingData';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


const Slides = ({ item }) => {
    const navigation = useNavigation();    
    const { width } = Dimensions.get('window');

    const skipToSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.skipLayout}>

                <TouchableOpacity onPress={skipToSignUp}>
                    <Text style={styles.skipText}> SKIP </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.onboardImageLay}>
                <Image source={item.image} style={[styles.onboardImage, { width }]} />
            </View>

           <View style={[styles.onboardLayout, { width }]}>
                <Text style={styles.title}> {item.title} </Text>
                <Text style={styles.subject}>{item.subject} </Text>
           </View>

         


        </View>
    )
}

export default Slides;

const styles = ScaledSheet.create({
    container: {
        paddingTop: '45@vs',
        flex: .9,
    },
    onboardLayout: {
        paddingHorizontal: '3@vs',
        flex: .3,
        justifyContent: 'center'
    },
    onboardImageLay: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center',
    },
   skipLayout: {
       justifyContent: 'center',
       alignItems: 'flex-end',
       paddingHorizontal: '10@vs',
   },
   skipText: {
       fontFamily: 'Proxima',
       color: '#336699',
       fontSize: '15@vs'
   },
   subject: {
       fontFamily: 'Circular',
       fontSize: '13.5@vs',
       paddingHorizontal: '5@vs'
   },
   title: {
       fontFamily: "Proxima",
       fontSize: '23@vs',
       marginTop: '8@vs'
   },
   onboardImage: {
       resizeMode: 'contain',
   }

});

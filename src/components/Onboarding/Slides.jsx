import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {OnboardingData}  from './OnboardingData';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


const Slides = ({ item, index, event, nextSlide }) => {
    const navigation = useNavigation();
    
    const { width } = Dimensions.get('window');
    const [ currentSlideIndex, setCurrentSlideIndex] = useState(null);

    useEffect(() => {
       setCurrentSlideIndex(event)
    }, [event])

    const skipToSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.skipLayout}>
                <TouchableOpacity onPress={skipToSignUp}>
                    <Text style={[styles.skipText, {}]} > SKIP </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.onboardImage}>

            </View>

           <View style={[styles.onboardLayout, { width }]}>
                <Text style={styles.title}> {item.title} </Text>
                <Text style={styles.subject}> {item.subject} </Text>
           </View>

          <TouchableOpacity style={styles.indicatorLayout}>
                {/* Indicators */}
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              { OnboardingData.map((_, index) => (
                  <View key={index} style={[
                     styles.indicator,
                     currentSlideIndex == index && {
                     backgroundColor: '#336699'
                  }]} />
              ))}
            </View>

            <MaterialCommunityIcons name="arrow-right" size={23} style={styles.indicatorIcon} onPress={nextSlide} />

          </TouchableOpacity>

        </View>
    )
}

export default Slides;

const styles = ScaledSheet.create({
    container: {
        paddingTop: '45@vs',
        flex: 1
    },
    onboardLayout: {
        paddingHorizontal: '3@vs',
        flex: .2
    },
    onboardImage: {
        flex: .65
    },
   indicator: {
        height: 8, 
        width: 20,
        borderRadius: 5, 
        backgroundColor: '#ddd',
        marginHorizontal: 3,
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
   indicatorLayout: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: '10@vs',
       flex: .15
   },
   subject: {
       fontFamily: 'Circular',
       fontSize: '13@vs'
   },
   title: {
       fontFamily: "Proxima",
       fontSize: '23@vs'
   },
   indicatorIcon: {
        backgroundColor: '#98afcf',
       color: '#fff',
       paddingVertical: '8@vs',
       borderRadius: '30@vs',
       paddingHorizontal: '8@vs'  
   }
});

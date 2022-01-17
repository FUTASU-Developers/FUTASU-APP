import React, { useState, useRef } from 'react'
import { SafeAreaView, FlatList, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { ScaledSheet } from 'react-native-size-matters';



// get data
import {OnboardingData}  from './OnboardingData';

import Slides from './Slides';

const OnboardScreen = () => {
    const navigation = useNavigation();
    const  { width } = Dimensions.get('window');
    const [currIndex, setCurrIndex ] = useState(0);
    const ref = useRef(null);

      // get current idex of screen onSlide 
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x 
        const currentIndex = Math.round( contentOffsetX / width );
        setCurrIndex(currentIndex);
    };

    // move between slides
    const nextSlide = () => {
        const nextSlideIndex = currIndex + 1 ;
        if( nextSlideIndex != OnboardingData.length) {
            const offset = nextSlideIndex * width ;
            ref?.current?.scrollToOffset({ offset });
            setCurrIndex(nextSlideIndex);
        }
    }

    // skip ?
    const skipSlide = () => {
        const lastSlideIndex = OnboardingData.length - 1 ;
        const offset = lastSlideIndex * width ;
        ref?.current?.scrollToOffset({ offset });
        setCurrIndex(lastSlideIndex);
    }

     const skipToSignUp = () => {
        navigation.navigate('SignUp');
    }


    return (
        <SafeAreaView style={styles.container}>

            <FlatList 
                pagingEnabled
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                data={OnboardingData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <Slides key={item.id} 
                    item={item} 
                    event={currIndex} 
                    navigation={navigation}
                    nextSlide={nextSlide}
                    skipSlide={skipSlide}
                />}
            />

            <View style={styles.indicatorLayout}>
                {/* Indicators */}
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                { OnboardingData.map((_, index) => (
                    <View key={index} style={[
                        styles.indicator,
                        currIndex == index && {
                        backgroundColor: '#336699'
                    }]} />
                ))}
                </View>

            { currIndex === 2 
                ?
                   <TouchableOpacity onPress={skipToSignUp} style={styles.getStartedLay}>
                        <Text style={styles.getStarted}>Get Started</Text>
                        <MaterialCommunityIcons name="arrow-right" size={15} color="#36ac" />
                   </TouchableOpacity>
                :
                    <MaterialCommunityIcons name="arrow-right" size={23} style={styles.indicatorIcon} onPress={nextSlide} />
            }
          </View>
            
        </SafeAreaView>
    )
}

export default OnboardScreen;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
     indicator: {
        height: 8, 
        width: 20,
        borderRadius: 5, 
        backgroundColor: '#ddd',
        marginHorizontal: 3,
   },
   indicatorLayout: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: '10@vs',
       flex: .1,
   },
      indicatorIcon: {
        backgroundColor: '#98afcf',
       color: '#fff',
       paddingVertical: '8@vs',
       borderRadius: '30@vs',
       paddingHorizontal: '8@vs'  
   },
   getStarted: {
      fontFamily: 'Circular',
       fontSize: '12.5@vs',
       paddingHorizontal: '5@vs' ,
       color: '#36ac'
   },
   getStartedLay: {
       borderWidth: 1,
       borderColor: "#36ac",
       paddingHorizontal: '10@vs',
       paddingVertical: '6@vs',
       borderRadius: 30,
       flexDirection: 'row'
   }
});
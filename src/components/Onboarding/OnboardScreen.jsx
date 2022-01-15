import React, { useState, useRef } from 'react'
import { SafeAreaView, FlatList, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
            
        </SafeAreaView>
    )
}

export default OnboardScreen;

const styles = ScaledSheet.create({
    container: {
        flex: 1
    }
});
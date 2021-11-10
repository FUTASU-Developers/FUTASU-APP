import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,StatusBar,ScrollView } from 'react-native';
import { scale , ScaledSheet } from 'react-native-size-matters';
import TopStack from '../../components/topStack';
import Title from '../../components/constitution/Title';

const ConstitutionLanding = ({ navigation }) => {
    
    return (
        
        <ScrollView style={{backgroundColor:'#fff',height:'100%'}}>
            <TopStack title='FUTASU Constitution' />
            <View style={{marginTop:20}}>
                <Title Press={ () => navigation.navigate( 'Introduction')} title="INTRODUCTION" border={true} />
                <Title Press={ () => navigation.navigate( 'Article I')} title="ARTICLE I" border={true}/>
                <Title title="ARTICLE II" border={true}/>
                <Title title="ARTICLE III" border={true}/>
                <Title title="ARTICLE IV" border={true}/>
                <Title title="ARTICLE VI" border={true}/>
                <Title title="ARTICLE VII" border={true}/>
                <Title title="ARTICLE VIII" border={true}/>
                <Title title="ARTICLE IX" border={true}/>
                <Title title="ARTICLE X" />
            </View>
            
        </ScrollView>
    )
}

const styles = ScaledSheet.create({
    
})

export default ConstitutionLanding;

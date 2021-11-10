import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,StatusBar,ScrollView } from 'react-native';
import TopStack from '../topStack';


const Article=(props)=>{
    return(
        <ScrollView  style={{backgroundColor:'#fff',height:'100%'}}>
            <TopStack title={props.title} navigate={props.navigate}/>
            <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                 {props.children}
            </View>
            
        </ScrollView>
    )
}




export default Article
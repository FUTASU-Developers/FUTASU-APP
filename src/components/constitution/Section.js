import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,StatusBar,ScrollView } from 'react-native';
import TopStack from '../topStack';


const Section=(props)=>{
    return(
        <View style={{backgroundColor:'#fff',width:'90%',marginVertical:15}}>
            <Text style={{fontSize:25,fontFamily: 'SfPro',fontWeight:'700'}}>S.{props.number}  {props.title}</Text>
            <Text style={{fontFamily: 'SfPro',marginVertical:10,fontSize:18,lineHeight:30}}>{props.children}</Text>
        </View>
    )
}




export default Section
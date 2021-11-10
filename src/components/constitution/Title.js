import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Title=(props)=>{
    return(
        <TouchableOpacity  activeOpacity={1} onPress={props.Press}>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#D6D6D6',borderBottomWidth:props.border?1:0,paddingVertical:20}} >
            <View style={{marginLeft:40}}>
                <Text style={{fontSize:18,fontFamily: 'SfPro',color:'#4D4351'}}>{props.title}</Text>
            </View>

            <View style={{marginRight:40}}>
                <Icon  name="chevron-forward"  size={25}  />  
            </View>
            
        </View>
        </TouchableOpacity>
        
    )
}

export default Title
import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,StatusBar } from 'react-native';
import { scale , ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/core';


const TopStack=(props)=>{
    const navigation=useNavigation()
    return (
        <View style={styles.topBar}>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} name="ios-chevron-back" onPress={() => navigation.goBack()}  />  
            </View>

           <View style={{  paddingRight: 10,marginTop:StatusBar.currentHeight,flex:2 }}>
                <Text style={styles.topText}>{props.title}</Text>
            </View>

            <View style={{  paddingRight: 10,flex:1 }}>
                {/* leave empty */}
         </View>

      </View>
    )
}


const styles = ScaledSheet.create({
    topBar: { flexDirection:'row',justifyContent:'space-between',width:'100%', backgroundColor: '#fff', flexDirection: 'row', paddingTop: StatusBar.currentHeight,alignItems:'center'},
    iconContainer: { paddingLeft: 10,marginTop:StatusBar.currentHeight,flex:1 },
    icon:{ marginLeft: '5@s',backgroundColor:'#fff' ,color: '#220917',fontSize: 35},
    topText: {backgroundColor:'#fff',flex:5,fontSize:23,fontFamily: 'SfPro',textAlign:'center'}
})

export default TopStack
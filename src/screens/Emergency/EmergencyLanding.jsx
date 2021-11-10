import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,Image,TouchableOpacity } from 'react-native';
import { scale , ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const EmergencyLanding = ({ navigation }) => {
    return (
        <View style={styles.body}>
      
                    <Image source={require('../../assets/Images/Emergency.png')}  style={{width:190,height:190,marginTop:150}}/>

                    <Text style={{textAlign:'center',fontSize:30,fontFamily: 'SfPro',fontWeight:'bold',marginTop:30}}>A new way to send SOS {'\n'} signals </Text>
                   
                    <TouchableOpacity onPress={ () => navigation.navigate( 'Alpha')} style={{backgroundColor:'#A2296E',width:'60%',paddingHorizontal:10,paddingVertical:15,marginTop:70,borderRadius:16}}>
                        <View   >
                            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',color:'white'}}>Coming soon..</Text>
                        </View>
                    </TouchableOpacity>
                    
                 
        </View>
    )
}

const styles = ScaledSheet.create({
    body:{flex:1,width:'100%',alignItems:'center',backgroundColor:'#fff'}
})

export default EmergencyLanding;

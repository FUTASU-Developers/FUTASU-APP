import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { MaterialCommunityIcons,EvilIcon } from 'react-native-vector-icons';
import { EvilIcons } from '@expo/vector-icons'

const Alpha = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const [input, setInput] = useState('')

    // handle search input
    const handleSearchInput = async () => {
        // send input as params
        navigation.navigate('ELibraryStack', { screen: 'ELibraryLanding', params: { searchInput: input }});
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1}}>

                <View style={styles.ConstitutionContainer}>

                    {/* Welcome */}
                    <View style={[styles.contentStyle, { width: width-50 }]}>
                        <View style={styles.TextContainer}>
                            <Text style={styles.welcStyle}>Welcome </Text>
                            <Text style={styles.nameStyle}>
                                <MaterialCommunityIcons  name="school" style={styles.IconStyle}  /> 
                                <MaterialCommunityIcons  name="school" style={styles.IconStyleII}  /> 
                            </Text>
                        </View>
                        <Image source={require('../assets/Images/futasuLogo.png')} style={styles.logoStyle} />
                    </View>


                {/*  Constitution */}
                <TouchableOpacity onPress={ () => navigation.navigate( 'ConstitutionStack')} activeOpacity={1}>
                    <View style={[styles.contentContainer, { width: width - 50,marginTop:30 }]}>
                            <View style={styles.contentTextStyle}>
                                <Text style={styles.dispStyle}> FUTASU </Text>
                                <Text style={styles.subDispStyle}> Constitution </Text>
                                
                            
                                <View style={styles.ButtonStyle}>
                                    <Text style={styles.nameIIStyle}> Read More </Text>
                                    <MaterialCommunityIcons  name="arrow-right" style={styles.ButtonIcon}  />
                                </View>
                        </View>
                            <Image source={require('../assets/Images/Constitution.png')} style={styles.imageStyle} />
                        </View>
                    </TouchableOpacity>

                {/* ELibrary */}
                    <View style={{ marginTop: 0,width:width-60}}>
                        <Text style={styles.nameIIIStyle}> Search Library </Text>

                        <View style={{flex:1,backgroundColor:'#F0F0F0',borderRadius:8,flexDirection:'row',justifyContent:'space-between',borderColor:'#D6D6D6',borderWidth:1}}>
                             <TextInput placeholder='Search fro any book....' placeholderTextColor='#54414A' style={{flex:1,paddingVertical:10,fontSize:15,paddingHorizontal:15}}/>
                             <EvilIcons name="search" size={35} color="black" style={{marginRight:20,marginVertical:10}} onPress={handleSearchInput}/>
                        </View>

                    </View>

                {/* Transportation and Emergency */}
                    <View style={{ marginVertical: 30}}>
                        <Text style={styles.otherStyle}> Other Services </Text>
                        <View style={[ styles.RowStyle, { width: width }]}>

                            {/* Emergency */}
                            <TouchableWithoutFeedback onPress={ () => navigation.navigate('EmergencyStack')}>
                                <View style={[styles.emerCard, { width: width / 2.3 }]}>
                                    <Image source={require('../assets/Images/Emergency.png')} style={styles.EmerimageStyle} />
                                    <Text style={styles.EmertextStyle}> Emergency </Text>
                                </View>
                            </TouchableWithoutFeedback> 

                            {/* Transportation */}
                            <TouchableWithoutFeedback onPress={ () => navigation.navigate('TransportationStack')}>
                                <View style={[styles.transCard, { width: width / 2.3 }]}>
                                    <Image source={require('../assets/Images/Transportation.png')} style={styles.TransimageStyle} />
                                    <Text style={styles.TranstextStyle}> Transportation </Text>
                                </View>
                            </TouchableWithoutFeedback> 

                        </View>
                    </View> 


                </View> 
            </ScrollView> 
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    ConstitutionContainer: {alignItems: 'center', paddingTop:80, backgroundColor: '#fff',flex: 1 } ,
    // Constitution
    contentContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, backgroundColor: '#3b2f2f', marginVertical: '18@s', paddingVertical: '20@s', borderRadius: 15 },
    dispStyle: { fontSize: 35, color: '#fff', fontFamily: 'SfPro',marginLeft:10 },
    subDispStyle: { fontSize: 35, color: '#fff', fontFamily: 'SfPro',marginLeft:10 },
    ButtonStyle: {marginTop:10,width:'100%',flexDirection: 'row', alignItems: 'center', paddingVertical: '4@s',marginLeft:15},

    nameIIStyle: { fontSize: 18, color: '#fff', fontFamily: 'SfPro' },
    ButtonIcon: { fontSize: '14@s', color: '#fff' },
    imageStyle: { width: 140, height: 140 },

    // Welcome styles
    TextContainer: { flexDirection: 'column'},
    contentStyle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '13@s'},
    welcStyle: { fontSize: 28, color: '#000', fontFamily: 'SfPro',fontWeight:'bold'},
    nameStyle: { fontSize: 28, color: '#3a3b3c', fontFamily: 'SfPro', marginRight: 10,marginTop:2},
    logoStyle: { width: '45@s', height: '45@s' },
    IconStyle: {color: '#fbb917', fontSize: '25@s'},
    IconStyleII: {color:'#3a3b3c', fontSize: '25@s'},

    // ELibrary styles
    searchContainer: { borderColor: '#eee', borderWidth: 1, padding: '9@s', marginVertical: '10@s', borderRadius: 5, justifyContent: 'center' },
    searchContent: {  flexDirection: 'row', alignItems: 'center' },
    inputStyle: {fontSize: '15@s', color: '#3a3b3c', fontFamily: 'SfPro'},
    nameIIIStyle: { fontSize: 20,fontWeight:'bold',color: 'black', fontFamily: 'SfPro',marginBottom:15 },

    // Transportation and Emergency
    otherStyle: { marginTop: '10@s', fontSize: '18@s', color: '#3a3b3c', marginHorizontal: '20@s', fontFamily: 'SfPro'},
    RowStyle: { flexDirection :'row', justifyContent: 'space-around', alignItems: 'center', padding: '10@s'},

    // Transportation
    transCard: { backgroundColor: '#fbb917', justifyContent: 'center', padding: '10@s', alignItems: 'center', borderRadius: 7, elevation: 1},
    TransimageStyle: { width: 100, height: 100 },
    TranstextStyle: { color: '#fff', fontSize: '18@s', marginVertical: '8@s', fontFamily: 'SfPro'},

    // Emergency
    emerCard: { backgroundColor: '#e41b17', justifyContent: 'center', padding: '10@s', alignItems: 'center', borderRadius: 7, elevation: 1},
    EmerimageStyle: { width: 100, height: 100 },
    EmertextStyle: { color: '#fff', fontSize: '18@s', marginVertical: '8@s', fontFamily: 'SfPro'}
});

export default Alpha ;

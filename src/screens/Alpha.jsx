import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Alpha = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const [input, setInput] = useState('');

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
                    <View style={[styles.contentStyle, { width: width }]}>
                        <View style={styles.TextContainer}>
                            <Text style={styles.welcStyle}> Welcome </Text>
                            <Text style={styles.nameStyle}> Seun  
                                <MaterialCommunityIcons  name="school" style={styles.IconStyle}  /> 
                                <MaterialCommunityIcons  name="school" style={styles.IconStyleII}  /> 
                            </Text>
                        </View>
                        <Image source={require('../assets/Images/futasuLogo.png')} style={styles.logoStyle} />
                    </View>


                {/*  Constitution */}
                    <View style={[styles.contentContainer, { width: width - 15 }]}>
                        
                        <View style={styles.contentTextStyle}>
                                <Text style={styles.dispStyle}> FUTASU </Text>
                                <Text style={styles.subDispStyle}> Constitution </Text>
                                
                            <TouchableOpacity onPress={ () => navigation.navigate( 'ConstitutionStack')}>
                                <View style={styles.ButtonStyle}>
                                    <Text style={styles.nameIIStyle}> Read More </Text>
                                    <MaterialCommunityIcons  name="arrow-right" style={styles.ButtonIcon}  />
                                </View>
                            </TouchableOpacity>
                        </View>

                            <Image source={require('../assets/Images/Constitution.png')} style={styles.imageStyle} />
                    </View>

                {/* ELibrary */}
                    <View style={{ marginTop: scale(10)}}>
                        <Text style={styles.nameIIIStyle}> Search Library </Text>

                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <View style={[ styles.searchContainer, {  width: width - 20 }]}>
                                    <View style={[ styles.searchContent, {} ]}>
                                        <TextInput
                                            placeholder="Search for any book....." 
                                            style={[styles.inputStyle, { width: width - 65 }]}
                                            placeholderTextColor='#bbb'
                                            value={input}
                                            onChangeText={val => setInput(val)}   
                                        />
                                        <MaterialCommunityIcons  name="file-search" style={styles.searchIconStyle} onPress={handleSearchInput} />
                                    </View>

                                </View>
                            </View>
                    </View>

                {/* Transportation and Emergency */}
                    <View style={{ marginVertical: scale(5)}}>
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
    ConstitutionContainer: {alignItems: 'center', padding: '50@s', backgroundColor: '#fff',flex: 1 } ,
    // Constitution
    contentContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '10@s', backgroundColor: '#3b2f2f', marginVertical: '18@s', paddingVertical: '20@s', borderRadius: 15 },
    dispStyle: { fontSize: '30@s', color: '#fff', fontFamily: 'Proxima' },
    subDispStyle: { fontSize: '20@s', color: '#fff', fontFamily: 'Circular', marginLeft: '3@s' },
    ButtonStyle: { marginTop: '25@s', marginHorizontal: '10@s', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: '5@s', paddingVertical: '4@s', borderRadius: 4 },
    nameIIStyle: { fontSize: '15@s', color: '#fff', fontFamily: 'Proxima' },
    ButtonIcon: { fontSize: '14@s', color: '#fff' },
    imageStyle: { width: 140, height: 140 },

    // Welcome styles
    TextContainer: { flexDirection: 'column'},
    contentStyle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '13@s'},
    welcStyle: { fontSize: '35@s', color: '#000', fontFamily: 'Proxima'},
    nameStyle: { fontSize: '25@s', color: '#3a3b3c', fontFamily: 'Proxima', marginRight: 10},
    logoStyle: { width: '45@s', height: '45@s' },
    IconStyle: {color: '#fbb917', fontSize: '25@s'},
    IconStyleII: {color:'#3a3b3c', fontSize: '25@s'},

    // ELibrary styles
    searchContainer: { borderColor: '#eee', borderWidth: 1, padding: '9@s', marginVertical: '10@s', borderRadius: 5, justifyContent: 'center' },
    searchContent: {  flexDirection: 'row', alignItems: 'center' },
    inputStyle: {fontSize: '15@s', color: '#3a3b3c', fontFamily: 'Proxima'},
    searchIconStyle: {color: '#aaa', fontSize: '25@s'},
    nameIIIStyle: { fontSize: '18@s', color: '#3a3b3c', marginLeft: '10@s', fontFamily: 'Proxima' },

    // Transportation and Emergency
    otherStyle: { marginTop: '10@s', fontSize: '18@s', color: '#3a3b3c', marginHorizontal: '20@s', fontFamily: 'Proxima'},
    RowStyle: { flexDirection :'row', justifyContent: 'space-around', alignItems: 'center', padding: '10@s'},

    // Transportation
    transCard: { backgroundColor: '#fbb917', justifyContent: 'center', padding: '10@s', alignItems: 'center', borderRadius: 7, elevation: 1},
    TransimageStyle: { width: 100, height: 100 },
    TranstextStyle: { color: '#fff', fontSize: '18@s', marginVertical: '8@s', fontFamily: 'Proxima'},

    // Emergency
    emerCard: { backgroundColor: '#e41b17', justifyContent: 'center', padding: '10@s', alignItems: 'center', borderRadius: 7, elevation: 1},
    EmerimageStyle: { width: 100, height: 100 },
    EmertextStyle: { color: '#fff', fontSize: '18@s', marginVertical: '8@s', fontFamily: 'Proxima'}
});

export default Alpha ;

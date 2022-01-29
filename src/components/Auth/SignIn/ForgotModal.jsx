import React from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ForgotModal = ({ visibility, changeModal }) => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return (
        <View>
            <Modal visible={visibility}>

                <View>
                    <MaterialCommunityIcons name="chevron-left" onPress={changeModal} size={35} style={styles.modalClose}  />

                    <Text style={styles.modalTopText}> Forgot Password!! </Text>
                    <Text style={styles.modalTopTextII}> Retrieve your lost password </Text>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1 , 
                            backgroundColor: '#fff',
                            marginTop: verticalScale(10),
                    }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                        {/* Email */}
                            <View style={[styles.nameCont, {width : width - 10 }]}>
                                    <Icon name="mail-outline" style={styles.InputIcon} />
                                <TextInput
                                    placeholder="Enter a valid email...."
                                    style={[styles.nameInput,{ width: width - 50 } ]}
                                    keyboardType="email-address"
                                    returnKeyType={'next'}
                                    // defaultValue={}  
                                    // onSubmitEditing={() => refInput4.current.focus()}
                                />
                            </View>
                        </View>

                     {/* submit button */}
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Verify')}  style={[styles.btn, { width: width - 50 }]}>
                        <Text style={[styles.btnText]}> Recover password </Text>
                    </TouchableOpacity>
                </View>

                    </ScrollView>
                </View>


            </Modal>
        </View>
    )
}

export default ForgotModal

const styles = ScaledSheet.create({
    modalClose: {
        marginVertical: '10@vs',
        marginHorizontal: '10@vs',
        color: '#7d0552',
    },
    modalTopText: {
        fontFamily: 'Proxima',
        textAlign: 'center',
        fontSize: '20@vs',
        color: '#7d0552',
    },
    modalTopTextII: {
        fontFamily: 'Circular',
        textAlign: 'center',
        fontSize: '12.5@vs',
        color: '#7d0552',
    },
     nameCont: {
        borderBottomWidth: 1, 
        padding: 4, 
        marginVertical: '10@vs',
        borderRadius: 3, 
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameInput: {
        fontFamily: 'Circular',
        fontSize: '12.5@vs',
        color: '#98afcf' 
    },  
    InputIcon: { 
       marginHorizontal: 5, 
       color: '#7d0552', 
       fontSize: '14@vs'
    },
     btn: {
      backgroundColor: '#7d0552', 
      padding: 10, 
      borderRadius: 5, 
      marginBottom: '20@vs',
      marginTop: '20@vs', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center'
   },
   btnText: {
      fontSize: '13@vs', 
      color: '#fff',
      textAlign: 'center', 
      fontFamily: 'Circular',
   },
})

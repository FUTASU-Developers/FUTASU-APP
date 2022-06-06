import React, { useState } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomisableAlert, { showAlert, closeAlert } from "react-native-customisable-alert";
import { useNavigation } from '@react-navigation/native';



const ForgotModal = ({ visibility, changeModal }) => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const [email, setEmail] = useState('');

    const RecoverFunc =  async () => {
        if(email == ''){
             showAlert({
                title: 'Mail Error',
                message: 'Empty field detected!!... Enter your mail to recieve code',
                btnLabel: 'go Back',
                customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            });
        }else{
            let recoveryCode = '0000' ;
            navigation.navigate('Verify', { recoveryCode, email }
            );
            // const request = await axios.post('', { email });
            // try{
            //     let recoveryCode = request.data.code ;
            //     showAlert({
            //         title: 'Mail Success',
            //         message: `A password recovery code has been sent to ${email} `,
            //         btnLabel: 'Proceed',
            //         customIcon:  <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            //         onPress: () => {
            //             navigation.navigate('Verify', { params: recoveryCode });
            //         }
            //     }) 
            // }catch(err){
            //     console.log(err);
            // }
            
        }

    }

    return (
        <View>
            <Modal visible={visibility}>

                    <MaterialCommunityIcons name="chevron-left" onPress={changeModal} size={35} style={styles.modalClose}  />
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{
                        backgroundColor: '#800070',
                        borderRadius: 90,
                        width: 90, height: 90,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <MaterialCommunityIcons name="mail" size={ 60 } style={{ 
                            marginVertical: verticalScale(5), 
                            color: '#ffff',
                         }} />                     

                    </View>


                    <Text style={styles.modalTopText}> Forgot Password!! </Text>
                    <Text style={styles.modalTopTextII}> Request an email to retrieve your lost password </Text>

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
                                    returnKeyType={'done'}
                                    defaultValue={email}  
                                    onChangeText={val => setEmail(val)}
                                />
                            </View>
                        </View>

                     {/* submit button */}
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={RecoverFunc}  style={[styles.btn, { width: width - 50 }]}>
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
        color: '#800070',
    },
    modalTopText: {
        fontFamily: 'Proxima',
        textAlign: 'center',
        fontSize: '22@vs',
        color: '#800070',
        marginTop: '10@vs'
    },
    modalTopTextII: {
        fontFamily: 'Circular',
        textAlign: 'center',
        fontSize: '13@vs',
        color: '#800070',
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
        color: '#a2296e' 
    },  
    InputIcon: { 
       marginHorizontal: 5, 
       color: '#800070', 
       fontSize: '14@vs'
    },
     btn: {
      backgroundColor: '#800070', 
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

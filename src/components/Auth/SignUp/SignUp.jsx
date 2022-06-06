import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomisableAlert, { showAlert, closeAlert } from "react-native-customisable-alert";
import axios from 'axios';

const logo = require('../../../assets/Images/futasuLogo.png');


const SignUp = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const [eye, setEye] = useState(true);
    const [coey, setCoey] = useState(true);
    const [textStat, setTextStat] = useState(true);
    const [subLoad, setSubLoad] = useState(false);


    const [userData, setUserData] = useState({
        surname: '',
        lastname: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });


    const moveToLogin = () => { 
        navigation.navigate('SignIn');
    }

    const registerFunc = async () => {

    const { surname, lastname, username, email, phoneNumber, password, confirmPassword } = userData ;

         if(!surname || !lastname || !username || !email || !phoneNumber || !password || !confirmPassword ){
            showAlert({
                title: 'Field Anomaly',
                message: 'Empty field detected... fill all fields with the necessary detail',
                btnLabel: 'go Back',
                customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            })
        }
        else if(username.length <= 5){
                showAlert({
                    title: 'Account Error',
                    message: 'Username too short!!... Input must be more than 5 characters',
                    btnLabel: 'go Back',
                    customIcon:  <MaterialCommunityIcons name="account" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
                });  
        }
        else if(password.length <= 6 ){
                showAlert({
                    title: 'Password Error',
                    message: 'Password too short!!...input must be more than 6 characters',
                    btnLabel: 'go Back',
                    customIcon:  <MaterialCommunityIcons name="key" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
                });
        }
        else if(password != confirmPassword){
                showAlert({
                    title: 'Password Error',
                    message: 'Passwords do no match!!...check input values',
                    btnLabel: 'go Back',
                    customIcon:  <MaterialCommunityIcons name="key" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
                });
        }
        else{
            setSubLoad(true);
            setTextStat(false);
            // const dataPush = await axios.post('', userData );
            // try{
            //     const response = dataPush.data ;
            //         setSubLoad(false);
            //         setTextStat(true);
            //         if(response.data.status == 200){
            //             showAlert({
            //                 title: 'Registration Status',
            //                 message: `${response}`,
            //                 btnLabel: 'Proceed',
            //                 onPress : () => {
            //                     navigation.navigate('SignIn');
            //                     setRegBtn(false);
            //                     setTextStat(true);
            //             }
            //         })
            //         }else{
            //             showAlert({
            //                 title: 'Registration Status',
            //                 message: `${response}`,
            //                 btnLabel: 'Check',
            //                 onPress : () => {
            //                     setRegBtn(false);
            //                     setTextStat(true);
            //             }
            //         })
            //         }
                   
            // }catch(err){
            //     console.log(err);
            // }
        }
    } 

    // input ref
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refInput3 = useRef();
    const refInput4 = useRef();
    const refInput5 = useRef();
    const refInput6 = useRef();
    

    const { surname, lastname, username, email, phoneNumber, password, confirmPassword } = userData ;

    return (
        <View style={[styles.container, { width }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logo} style={styles.logo} />
            </View>

            <Text style={styles.regText}> Create an account  </Text>
            <Text style={styles.regSubText}> Register with us now and explore our features  </Text>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1 , 
                    backgroundColor: '#fff',
                    marginTop: verticalScale(7)
                }}>
            
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    {/* Name */}
                <View style={[styles.nameLayout, { width }]}>
                    
                    <View style={[styles.nameCont, { width: width / 2.1  }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Surname"
                            style={[styles.nameInput,{ width: width / 2.8} ]}
                            returnKeyType={'next'}
                            onChangeText={ val => setUserData({ ...userData, surname: val.trim()}) }   
                            editable={textStat}
                            defaultValue={surname}
                            onSubmitEditing={() => refInput1.current.focus()}
                        />
                    </View>

                    <View style={[styles.nameCont, { width: width / 2.1  }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                        <TextInput
                            ref={refInput1}
                            placeholder="Lastname"
                            style={[styles.nameInput,{ width: width / 2.8} ]}
                            returnKeyType={'next'}
                            onChangeText={ val => setUserData({ ...userData, lastname: val.trim()}) }   
                            editable={textStat}
                            defaultValue={lastname}
                            onSubmitEditing={() => refInput2.current.focus()}
                        />
                    </View>
                </View>

                {/* Username */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="person-outline" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput2}
                        placeholder="Enter your preferred username...."
                        style={[styles.nameInput,{ width: width - 50 } ]}
                        onChangeText={ val => setUserData({ ...userData, username: val.trim()}) }   
                        editable={textStat}
                        defaultValue={username}
                        returnKeyType={'next'}
                        onSubmitEditing={() => refInput3.current.focus()}
                    />
                </View>
                
                {/* Email */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="mail-outline" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput3}
                        placeholder="Enter a valid email...."
                        style={[styles.nameInput,{ width: width - 50 } ]}
                        keyboardType="email-address"
                        returnKeyType={'next'}
                        onChangeText={ val => setUserData({ ...userData, email: val.trim()}) }   
                        editable={textStat}
                        defaultValue={email}  
                        onSubmitEditing={() => refInput4.current.focus()}
                    />
                </View>
                
                {/* Phone no */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <MaterialCommunityIcons name="cellphone" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput4}
                        placeholder="Enter your phone number...."
                        keyboardType="numeric"
                        style={[styles.nameInput,{ width: width - 50 } ]}
                        returnKeyType={'next'}
                        onChangeText={ val => setUserData({ ...userData, phoneNumber: val.trim()}) }   
                        editable={textStat}
                        defaultValue={phoneNumber}
                        onSubmitEditing={() => refInput5.current.focus()}
                    />
                </View>

                {/* Password */}
                <View>
                    <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="key" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput5}
                        placeholder="Enter a password..."
                        style={[styles.nameInput,{ width: width - 65 } ]}
                        returnKeyType={'next'}
                        onChangeText={ val => setUserData({ ...userData, password: val.trim()}) }   
                        editable={textStat}
                        secureTextEntry={eye}
                        defaultValue={password}
                        onSubmitEditing={() => refInput6.current.focus()}
                    />
                </View>

                 { eye ? 
                       <Icon name="ios-eye-off" style={{ marginRight: verticalScale(5), color: '#800070', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setEye(false)} />
                        :
                        <Icon name="ios-eye" style={{ marginRight: verticalScale(5), color: '#800070', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setEye(true)} />
                }

                </View>

                {/* Confirm password */}
                <View>
                    <View style={[styles.nameCont, {width : width - 10 }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput6}
                        placeholder="Confirm your password..."
                        defaultValue={confirmPassword}
                        style={[styles.nameInput,{ width: width - 65 } ]}
                        onChangeText={ val => setUserData({ ...userData, confirmPassword: val.trim()}) }   
                        editable={textStat}
                        secureTextEntry={coey}
                    />
                </View>
                { coey ? 
                       <Icon name="ios-eye-off" style={{ marginRight: verticalScale(5), color: '#800070', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setCoey(false)} />
                        :
                        <Icon name="ios-eye" style={{ marginRight: verticalScale(5), color: '#800070', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setCoey(true)} />
                }
                </View>

                 {/* submit button */}
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={registerFunc}  style={[styles.btn, { width: width - 50 }]}>
                        { !subLoad ? 
                        <Text style={[styles.btnText]}> Register </Text>
                        :
                        <ActivityIndicator size="small" color="#fff" />
                        }
                    </TouchableOpacity>
                </View>

               <TouchableOpacity onPress={moveToLogin}>
                    <Text style={styles.alr}> Already registered with us...Login?</Text>
               </TouchableOpacity>


            </View>


            </ScrollView>
            <CustomisableAlert 
                titleStyle={{fontSize: verticalScale(20), fontFamily: 'Proxima', color: '#800070'}} 
                textStyle={{fontFamily: 'Circular', color: '#800065', fontSize: verticalScale(13.5)}} 
                btnStyle={{fontFamily: 'Proxima', backgroundColor: '#800070', borderRadius: 5, elevation: 5}}
                btnLabelStyle={{fontFamily: 'Proxima', fontSize: verticalScale(12), color: '#fff'}}
            />
        </View>
    )
}

export default SignUp

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        paddingTop: '45@vs',
        backgroundColor: '#fff'
    },
    regText: {
        fontFamily: 'Proxima',
        fontSize: '23@vs',
        color: '#800070',
        textAlign: 'center'
    },
    regSubText: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#800070',
        textAlign: 'center'
    },
    nameLayout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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
    btnI: {
      borderColor: '#336699', 
      paddingHorizontal: 9, 
      borderRadius: 5,
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      borderWidth: .05,
      paddingVertical: '5@vs'
   },
   btnTextI: {
      fontSize: '12.5@vs', 
      color: '#98afcf',
      textAlign: 'center', 
      fontFamily: 'Circular',
   },
   logo: {
        width: '80@vs',
        height: '80@vs',
        marginVertical: '10@vs'
        // resizeMode: 'contain',
   },
   alr: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#800070', 
   }
})

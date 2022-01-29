import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const logo = require('../../../assets/Images/futasuLogo.png');


const SignUp = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const [eye, setEye] = useState(true);
    const [coey, setCoey] = useState(true);

    const [userData, setUserData] = useState({
        surname: '',
        lastname: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const { surname, lastname, username, email, phoneNumber, password, confirmPassword } = userData ;

    const moveToLogin = () => {
        navigation.navigate('SignIn');
    }

    // input ref
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refInput3 = useRef();
    const refInput4 = useRef();
    const refInput5 = useRef();
    const refInput6 = useRef();



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
                            // onChangeText={}
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
                        defaultValue={phoneNumber}
                        onSubmitEditing={() => refInput5.current.focus()}
                    />
                </View>

                {/* Pssword */}
                <View>
                    <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="key" style={styles.InputIcon} />
                     <TextInput
                        ref={refInput5}
                        placeholder="Enter a password..."
                        style={[styles.nameInput,{ width: width - 65 } ]}
                        returnKeyType={'next'}
                        secureTextEntry={eye}
                        defaultValue={password}
                        onSubmitEditing={() => refInput6.current.focus()}
                    />
                </View>

                 { eye ? 
                       <Icon name="ios-eye-off" style={{ marginRight: verticalScale(5), color: '#7d0552', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setEye(false)} />
                        :
                        <Icon name="ios-eye" style={{ marginRight: verticalScale(5), color: '#7d0552', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setEye(true)} />
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
                        secureTextEntry={coey}
                    />
                </View>
                { coey ? 
                       <Icon name="ios-eye-off" style={{ marginRight: verticalScale(5), color: '#7d0552', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setCoey(false)} />
                        :
                        <Icon name="ios-eye" style={{ marginRight: verticalScale(5), color: '#7d0552', fontSize: verticalScale(16), position: 'absolute', right: 0, marginTop: verticalScale(18) }} onPress={ () => setCoey(true)} />
                }
                </View>

                 {/* submit button */}
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity  style={[styles.btn, { width: width - 50 }]}>
                        <Text style={[styles.btnText]}> Register </Text>
                    </TouchableOpacity>
                </View>

               <TouchableOpacity onPress={moveToLogin}>
                    <Text style={styles.alr}> Already registered with us...Login?</Text>
               </TouchableOpacity>

            </View>


            </ScrollView>
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
        color: '#7d0552',
        textAlign: 'center'
    },
    regSubText: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#a2296e',
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
        color: '#7d0552', 
   }
})

import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ForgotModal from './ForgotModal';

const SignIn = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [modal, setModal] = useState(false);

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = userData ;

    const changeModal = () => {
        setModal(!modal);
    }

    // input ref
    const refInput1 = useRef();

    return (
        <View style={styles.container}>

            <Icon name="chevron-back" size={30} onPress={() => navigation.navigate('SignUp')} style={styles.intIcon} />

            <View style={styles.welcLayout}>
                <Text style={styles.welcText}>Welcome back!!</Text>
                <Text style={styles.welcSubText}> Login into your account with your details....</Text>
            </View>

            {/* form */}
        <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1 , 
                    backgroundColor: '#fff',
                    marginTop: verticalScale(7),
                }}>

                <View style={{alignItems: 'center'}}>
                        {/* username */}
                    <View style={[styles.nameCont, { width: width - 20  }]}>
                        <MaterialCommunityIcons name="account" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Enter your username...."
                            style={[styles.nameInput,{ } ]}
                            returnKeyType={'next'}
                            defaultValue={username}
                            onSubmitEditing={() => refInput1.current.focus()}
                        />
                    </View>

                    {/* username */}
                    <View style={[styles.nameCont, { width: width - 20  }]}>
                        <MaterialCommunityIcons name="key" style={styles.InputIcon} />
                        <TextInput
                            ref={refInput1}
                            placeholder="Enter your password...."
                            style={[styles.nameInput,{ } ]}
                            returnKeyType={'done'}
                            defaultValue={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={{alignItems: 'flex-start'}}
                    onPress={() => setModal(true)}>

                    <Text style={styles.forg}> Forgot password?</Text>

               </TouchableOpacity>

                     {/* login button */}
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity  style={[styles.btn, { width: width - 50 }]}>
                        <Text style={[styles.btnText]}> Login now!! </Text>
                    </TouchableOpacity>
                </View>
                
                
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.alr}> Don't have an account?...Register now!!</Text>
               </TouchableOpacity>


            </ScrollView>

            {/* Forgot PWd Modal */}

            <ForgotModal visibility={modal} changeModal={changeModal} />

        </View>
    )
}

export default SignIn

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '45@vs'
    },
    welcLayout: {
        paddingHorizontal: '7@vs',
        marginTop: '10@vs'
    },
    welcText: {
        fontFamily: 'Proxima',
        fontSize: '25@vs',
        color: '#7d0552'
    },
    welcSubText: {
        fontFamily: 'Circular',
        fontSize: '14@vs',
        color: '#a2296e'
    },
    intIcon: {
        color: '#a2296e',
        marginHorizontal: '5@vs'
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
       color: '#a2296e', 
       fontSize: '14@vs'
    },
    alr: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#a2296e', 
        textAlign: 'center'
   },
    forg: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#a2296e', 
        marginHorizontal: '10@vs',
        borderBottomWidth: 1,
        borderBottomColor: '#a2296e',
        marginTop: '10@vs'
   }
})

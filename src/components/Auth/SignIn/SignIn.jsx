import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ForgotModal from './ForgotModal';

const SignIn = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [modal, setModal] = useState(false);
    const [modalVasible, setModalVisible]

    // input ref
    const refInput1 = useRef();

    return (
        <View style={styles.container}>

            <Icon name="chevron-back" size={30} onPress={() => navigation.navigate('SignUp')} style={styles.intIcon} />

            <View style={styles.welcLayout}>
                <Text style={styles.welcText}>Welcome back!!</Text>
                <Text style={styles.welcSubText}> Login into your account details to signin...</Text>
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
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={{alignItems: 'flex-start'}}
                    onPress={() => setModalVisible(true)}>

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

            <ForgotModal visibility={modal} />

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
        color: '#336699'
    },
    welcSubText: {
        fontFamily: 'Circular',
        fontSize: '14@vs',
        color: '#98afcf'
    },
    intIcon: {
        color: '#36ac',
        marginHorizontal: '5@vs'
    },
    btn: {
      backgroundColor: '#336699', 
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
       color: '#98afcf', 
       fontSize: '14@vs'
    },
    alr: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#98afcf', 
        textAlign: 'center'
   },
    forg: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#36ac', 
        marginHorizontal: '10@vs',
        borderBottomWidth: 1,
        borderBottomColor: '#36ac',
        marginTop: '10@vs'
   }
})

import React, { useState, useRef } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput,ActivityIndicator } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ForgotModal from './ForgotModal';
import { showAlert, closeAlert } from 'react-native-customisable-alert';
import axios from 'axios';

const SignIn = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [modal, setModal] = useState(false);
    const [textStat, setTextStat] = useState(true);
    const [subLoad, setSubLoad] = useState(false);

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

    const loginFunc = async () => {
        if(!username || !password){
            showAlert({
                title: 'SignIn Error',
                message: 'Fill in all fields properly... Cannot validate empty parameters',
                btnLabel: 'Check field',
                customIcon:  <Icon name="ios-warning" size={ 90 } style={{ marginVertical: 5, color: '#800070'}} /> 
            });
        }else{
            setSubLoad(true);
            setTextStat(false);
                 const dataPush = await axios.post('localhost:3000', userData );
            try{
                const response = dataPush.data ;
                    setSubLoad(false);
                    setTextStat(true);
                    if(response.data.status == 200){
                         const user = response.user;
                        //  await AsyncStorage.setItem('token', JSON.stringify(token));
                         navigation.navigate('App');
                    }else{
                        showAlert({
                            title: 'SignIn Status',
                            message: `${response}`,
                            btnLabel: 'Check',
                            onPress : () => {
                                setRegBtn(false);
                                setTextStat(true);
                        }
                    })
                    }
                   
            }catch(err){
                console.log(err);
            }
        }
    }

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
                            editable={textStat}
                            onChangeText={ val => setUserData({...userData, username: val.trim()})}
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
                            onChangeText={ val => setUserData({...userData, password: val.trim()})}
                            defaultValue={password}
                            editable={textStat}
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
                    <TouchableOpacity  style={[styles.btn, { width: width - 50 }]} onPress={loginFunc}>
                         { !subLoad ? 
                        <Text style={[styles.btnText]}> Login now!! </Text>
                        :
                        <ActivityIndicator size="small" color="#fff" />
                        }
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
        color: '#800070'
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

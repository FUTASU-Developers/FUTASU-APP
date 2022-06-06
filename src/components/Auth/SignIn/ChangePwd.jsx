import React , { useState } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomisableAlert, { showAlert, closeAlert } from "react-native-customisable-alert";
import { useNavigation } from '@react-navigation/native';


const ChangePwd = ({ route }) => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const { email } = route.params ;

    const [pwdData, setPwdData] = useState({
        password: '',
        confirmPwd: ''
    });

    const { password, confirmPwd } = pwdData ;

    const processChange = async () => { 
        if(!password || !confirmPwd){
            showAlert({
                title: 'Field Anomaly',
                message: 'Empty field detected... Empty parameters are not allowed',
                btnLabel: 'go Back',
                customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            })
        } else if(password !== confirmPwd){
            showAlert({
                title: 'MisMatch',
                message: 'Passwords do not match!!!',
                btnLabel: 'go Back',
                customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            })
        }
        else{
            navigation.navigate('SignIn');
            // const request = await axios.post('', { email });
            // try{
            //     let response = request.data ;
            //         if(response.status === 200) {
            //             showAlert({
            //                 title: 'Change Success',
            //                 message: `You can now login with your new password `,
            //                 btnLabel: 'Proceed',
            //                 customIcon:  <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            //                 onPress: () => {
            //                     navigation.navigate('SignIn');
            //                 }
            //             }) 
            //          }else{
            //                 showAlert({
            //                 title: 'Network Error',
            //                 message: `Error in changing password`,
            //                 btnLabel: 'Try again',
            //                 customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> 
            //             }
            // }catch(err){
            //     console.log(err);
            // }
            
        }

    }

  return (
    <View style={[ styles.container ]}>
        <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.navigate('SignUp')} size={35} style={styles.topIcon}  />

               <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        backgroundColor: '#800070',
                        borderRadius: 80,
                        width: 80, height: 80,
                        alignItems: 'center',
                        justifyContent: 'center' }}>

                            <MaterialCommunityIcons name="key" size={ 60 } style={{ 
                            marginVertical: verticalScale(5), 
                            color: '#ffff',
                        }} />  
                    </View>
               </View>

      <Text style={[styles.topText]}> Change your password </Text>
      <Text style={[styles.topSubText]}> Use strong password to keep your account secured</Text>

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
                        <MaterialCommunityIcons name="key" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Enter new password...."
                            style={[styles.nameInput,{ } ]}
                            returnKeyType={'next'}
                            defaultValue={password}
                            secureTextEntry={true}
                            onChangeText={ val => setPwdData({ ...pwdData, password: val })}
                        />
                    </View>

                    {/* username */}
                    <View style={[styles.nameCont, { width: width - 20  }]}>
                        <Icon name="key" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Confirm your new password...."
                            style={[styles.nameInput,{ } ]}
                            returnKeyType={'done'}
                            defaultValue={confirmPwd}
                            secureTextEntry={true}
                            onChangeText={ val => setPwdData({ ...pwdData, confirmPwd: val })}
                        />
                    </View>
                </View>
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={processChange}  style={[styles.btn, { width: width - 50 }]}>
                        <Text style={[styles.btnText]}> Change password </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>

    </View>
  );
};

export default ChangePwd;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '45@vs'
    },
    topText: {
        fontFamily: 'Proxima',
        color: '#800070',
        fontSize: '24@vs',
        marginTop: '10@vs',
        textAlign: 'center'
    },
    topSubText: {
        fontFamily: 'Circular',
        color: '#800070',
        fontSize: '14@vs',
        marginTop: '1@vs',
        textAlign: 'center'
    },
    topIcon: {
        color: '#800070',
        marginHorizontal: '10@vs'
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
});

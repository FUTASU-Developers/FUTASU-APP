import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView,  Dimensions,  StatusBar, Image, TextInput, TouchableOpacity , ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import CustomisableAlert, { showAlert, closeAlert } from "react-native-customisable-alert";


const logo = require('../../../assets/Images/futasuLogo.png');


const Verify = ({ navigation, route }) => {
    const { width, height } = Dimensions.get('window');

    const  {email, recoveryCode}  = route.params;

    const [buttonValid, setButtonValid] = useState(false);
    const [ code, setCode ] = useState({ passcode: ['','','','']});
    const [sendStat, setSendStat] = useState(false)
    const ref = useRef();

    const { passcode } = code ;

    let numbers = [
        { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, 
        { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: null }, { id: '0' }];


        const onPressHandler = num => {
            let tempCode = passcode ;
            for(var i = 0; i <= tempCode.length; i++){
                if(tempCode[i] == '') {
                    tempCode[i] = num ;
                    break;
                } else{
                    continue;
                }
            }
            if(passcode[3] != ''){
                setButtonValid(true);
                setSendStat(true);  
            }
            setCode({ passcode: tempCode});
        }

        const onCancel = () => {
            let tempCode = passcode;
            for (var i = tempCode.length - 1 ; i >= 0; i-- ){
                if(tempCode[i] != '') {
                    tempCode[i] = '';
                    break;
                }else{
                    continue;
                }
            }
             if(passcode[3] === ''){
                setButtonValid(false);
                setSendStat(false);
            }
            setCode({ passcode: tempCode});
        }

        // Verify user and save
        const UserVerification = async () => {
            const pass = (passcode.join(""));
            if(sendStat === true){
                if(pass == recoveryCode){
                    console.log(recoveryCode, pass);
                    navigation.navigate('ChangePwd', { email });
                }else{
                    showAlert({
                        title: 'Code Error',
                        message: 'Expired/Invalid code... check your mail for the correct code or request for another!!',
                        btnLabel: 'go Back',
                        customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
                    });
                }
            }else{
              showAlert({
                title: 'Code Error',
                message: 'You need to provide the code sent to your mail to proceed....',
                btnLabel: 'go Back',
                customIcon:  <MaterialCommunityIcons name="alert" size={ 80 } style={{ marginVertical: verticalScale(5), color: '#800070'}} /> ,
            });
            }
        }

        // Resend verification
        const Resend = async () => {
               Alert.alert('VERIFICATION','Send Verification code again handler');
        }

    return ( 
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: verticalScale(40)  }}>
             
           <View style={styles.backContainer}>
                <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}>
                    <Icon name="chevron-back" style={styles.navBack} />
                 </TouchableOpacity>
           </View>
            
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                 <Image source={logo} style={{width: verticalScale(70), height: verticalScale(70), marginTop: verticalScale(5) }} />
                <Text style={styles.IntroText}> Verify email address </Text>
                <Text style={styles.IntroSubText}> Check your mail and enter verification code </Text>
            </View>


            {/* Code container */}

            <View style={styles.codeContainer}>
            { passcode.map( (p, index) => {
                let style = p != '' ? styles.code2 : styles.code ;
                return <View style={style} key={index} />
            }) }
            </View>
    

            <View style={{ backgroundColor: '#fff', width: width, justifyContent: 'center', alignItems: 'center'}}>
                <View style={[styles.numContainer, { width: width - 40}]}>

                    { numbers.map( num => {
                        return ( 
                        <TouchableOpacity style={[ num.id != '' ? styles.num : styles.num1 ]}  onPress={() => onPressHandler(num.id)} key={num.id}>
                            <Text style={styles.numText} key={num.id}> { num.id} </Text>
                        </TouchableOpacity>
                        )
                    })}

                    <TouchableOpacity style={styles.num} onPress={() => onCancel()}>
                         <Icon name="chevron-back" style={styles.numText} />
                    </TouchableOpacity>
                </View>
            </View>



    <View style={{position: 'absolute', bottom: 0, backgroundColor: '#fff',width: width, flex: .2, padding: 1, alignItems: 'center' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, marginBottom: 10, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Circular', color: '#222', fontSize: verticalScale(12) }}> Did not receive verification code?  </Text>
            <Text style={{ fontFamily: 'Circular', color: '#800070' , fontSize: verticalScale(11) }} onPress={Resend}>Resend </Text>
        </View>

        <TouchableOpacity ref={ref} onPress={UserVerification} style={[ !buttonValid ? styles.InvalidButton : styles.btn, { width: width - 150 }]}>
            <Text style={ [ !buttonValid ? styles.btnText : styles.btnTextX,]}> Submit code </Text>
        </TouchableOpacity>
        
    </View>

        </View>
    )
}

export default Verify;

const styles = ScaledSheet.create({
    topBar: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#800070' , 
        marginHorizontal: 5, 
        marginVertical: 15},
    btn: {
         backgroundColor: '#800070' , 
        padding: '10@vs', 
        borderRadius: 30, 
        marginBottom: 50,
   },
    InvalidButton: {
        backgroundColor: '#eee', 
        padding: '10@vs', 
        borderRadius: 30, 
        marginBottom: 50,
   },
   btnText: {
        fontSize: '13@vs', 
        color: '#800070', 
        textAlign: 'center', 
        fontFamily: 'Circular',
   },
   btnTextX: {
        fontSize: '13@vs', 
        color: '#fff', 
        textAlign: 'center', 
        fontFamily: 'Circular',
   },
   codeContainer: {
        marginTop: 30, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
   },
   code: {
        width: '12@vs', 
        height: '12@vs', 
        borderRadius: '12@vs',
        borderWidth: 1, 
        borderColor: '#ddd' ,
        marginHorizontal: 15, 
        backgroundColor: '#ddd',
   },
   code2: {
        width: '12@vs', 
        height: '12@vs', 
        borderRadius: '12@vs',
        marginHorizontal: 15, 
        backgroundColor: '#800070',
   },
   numContainer: {
        marginTop: '20@vs', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
   },
   num: {
        width: '70@vs', 
        height: '50@vs', 
        borderRadius: '5@vs', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: '5@vs', 
        marginVertical: '10@vs'
   },
   num1: {
        width: '30@vs', 
        height: '30@vs', 
        borderRadius: 60,
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18, 
        marginVertical: 15
   },
   numText: {
       fontSize: '25@vs', 
       fontFamily: 'Proxima', 
       textAlign: 'center', 
       color:'#800070'
   },
   navBack: {
      fontSize: '27@vs', 
      color: '#800070',
      marginLeft: '7@vs'  
   },
   backContainer: {
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'center',
      marginTop: 5
    },
    IntroText: {
        fontFamily: 'Proxima',
        color: '#800070',
        fontSize: '20@vs',
        textAlign: 'center', 
        marginTop: '5@vs'
    },
    IntroSubText: {
        fontFamily: 'Circular', 
        color: '#800065', 
        fontSize: '13@vs', 
        marginTop: '2@vs'
    },
});

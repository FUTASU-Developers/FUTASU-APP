import React , { useState } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChangePwd = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const processChange = () => {
        navigation.navigate('SignUp');
    }

  return (
    <View style={[ styles.container ]}>
        <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.navigate('SignUp')} size={35} style={styles.topIcon}  />
      <Text style={[styles.topText]}> Change your password </Text>

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
                            // defaultValue={}
                            // onSubmitEditing={() => refInput1.current.focus()}
                        />
                    </View>

                    {/* username */}
                    <View style={[styles.nameCont, { width: width - 20  }]}>
                        <MaterialCommunityIcons name="key" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Confirm your new password...."
                            style={[styles.nameInput,{ } ]}
                            returnKeyType={'done'}
                            // defaultValue={}
                            secureTextEntry={true}
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
        color: '#7d0552',
        fontSize: '25@vs',
        marginLeft: '5@vs',
        marginTop: '5@vs'
    },
    topIcon: {
        color: '#7d0552'
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
});

import React from 'react'
import { Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const SignUp = () => {
     const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return (
        <View style={[styles.container, { width }]}>
            <Text style={styles.regText}> Create an account  </Text>
            <Text style={styles.regSubText}> Register with us now and explore our features  </Text>

            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons color="#336699" name="checkbox-multiple-marked-circle-outline" size={100} style={{ marginTop: verticalScale(15) }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1 , 
                    backgroundColor: '#fff',
                }}>
            
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    {/* Name */}
                <View style={[styles.nameLayout, { width }]}>
                    
                    <View style={[styles.nameCont, { width: width / 2.1  }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Surname"
                            style={[styles.nameInput,{ } ]}
                        />
                    </View>

                    <View style={[styles.nameCont, { width: width / 2.1  }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                        <TextInput
                            placeholder="Lastname"
                            style={[styles.nameInput,{} ]}
                        />
                    </View>
                </View>

                {/* Username */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="person-outline" style={styles.InputIcon} />
                     <TextInput
                        placeholder="Enter your preferred username...."
                        style={[styles.nameInput,{ } ]}
                    />
                </View>
                
                {/* Email */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="mail-outline" style={styles.InputIcon} />
                     <TextInput
                        placeholder="Enter a valid email...."
                        style={[styles.nameInput,{ } ]}
                    />
                </View>
                
                {/* Phone no */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <MaterialCommunityIcons name="cellphone" style={styles.InputIcon} />
                     <TextInput
                        placeholder="Enter your phone number...."
                        keyboardType="numeric"
                        style={[styles.nameInput,{ } ]}
                    />
                </View>

                {/* Username */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <Icon name="key" style={styles.InputIcon} />
                     <TextInput
                        placeholder="Enter a password..."
                        style={[styles.nameInput,{ } ]}
                    />
                </View>

                {/* Username */}
                <View style={[styles.nameCont, {width : width - 10 }]}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" style={styles.InputIcon} />
                     <TextInput
                        placeholder="Confirm your password..."
                        style={[styles.nameInput,{ } ]}
                    />
                </View>

                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity  style={[styles.btn, { width: width - 30 }]}>
                        <Text style={[styles.btnText]}> Register </Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: '25@vs',
        color: '#336699'
    },
    regSubText: {
        fontFamily: 'Circular',
        fontSize: '14@vs',
        color: '#336699'
    },
    nameLayout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    nameCont: {
        borderWidth: 1, 
        padding: 4, 
        marginVertical: '10@vs',
        borderRadius: 3, 
        backgroundColor: '#fff',
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameInput: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#98afcf' 
    },  
    InputIcon: { 
       marginHorizontal: 5, 
       color: '#98afcf', 
       fontSize: '14@vs'
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
})

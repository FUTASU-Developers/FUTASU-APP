import React from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotModal = ({ visibility, changeModal }) => {

    return (
        <View>
            <Modal
                visible={visibility}
            >

                <View>
                    <MaterialCommunityIcons name="chevron-left" onPress={changeModal} size={35} style={styles.modalClose}  />

                    <Text style={styles.modalTopText}> Forgot Password!! </Text>
                    <Text style={styles.modalTopTextII}> Recover your password </Text>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1 , 
                            backgroundColor: '#fff',
                            marginTop: verticalScale(7),
                    }}>

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
        marginHorizontal: '10@vs'
    },
    modalTopText: {
        fontFamily: 'Proxima',
        textAlign: 'center',
        fontSize: '20@vs'
    },
    modalTopTextII: {
        fontFamily: 'Circular',
        textAlign: 'center',
        fontSize: '12.5@vs'
    }
})

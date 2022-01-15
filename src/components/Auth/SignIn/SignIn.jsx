import React from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
     const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <Text> Login </Text>
        </View>
    )
}

export default SignIn

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

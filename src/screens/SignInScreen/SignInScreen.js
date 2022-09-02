import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, StatusBar } from 'react-native'
import AccountButton from '../../components/AccountButton/AccountButton';
import CustomInput from '../../components/CustomInput/CustomInput';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.log('ur signed in bitch')
    }

    const onForgotPasswordPressed = () => {
        console.log('you forgot youre fucking password you goddamn moron')
    }

    const onCreateAccountPressed = () => {
        console.log('whyd u pick log in if you dont have an account')
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar style="auto" />
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome Back</Text>
            </View>

            <CustomInput placeholder="Username or Email" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

            <AccountButton text='Log In' onPress={onSignInPressed}/>
            <AccountButton text='Forgot Password' onPress={onForgotPasswordPressed} type='TERTIARY' />
            <AccountButton text="Don't have an account? Create one" onPress={onCreateAccountPressed} type='TERTIARY_UNDERLINED' />


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#0DD162'
    },

    header: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    headerText: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: '36',
        marginVertical: 80
    }
})

export default SignInScreen
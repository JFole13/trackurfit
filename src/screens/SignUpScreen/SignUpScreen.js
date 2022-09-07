import React, {useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, StatusBar } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import AccountButton from "../../components/AccountButton/AccountButton";

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const onCreateAccountPressed = () => {
        console.log('u created an account bitch');
    } 

    const onSignInPressed = () => {
        console.log('why did you pick create account fucker');
    }

    
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
            </View>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Confirm Password" value={confirmPassword} 
                         setValue={setConfirmPassword} secureTextEntry={true} />
            
            <AccountButton text='Create Account' onPress={onCreateAccountPressed}/>
            <AccountButton text="Already have an account? Log in" onPress={onSignInPressed} type='TERTIARY_UNDERLINED' />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#0DD162'
    },

    header: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    headerText: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: '36',
        marginBottom: 80
    },

    loginView: {
        width: '100%',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    loginButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    loginButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: '19',
        color: '#0DD162'
    },
})

export default SignUpScreen;
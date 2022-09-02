import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, StatusBar } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
            </View>
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <View style={styles.loginView}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
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
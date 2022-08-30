import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, StatusBar } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';

const SignInScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome Back</Text>
            </View>
            <CustomInput />
            <View style={styles.loginView}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log In</Text>
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
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    headerText: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: '36',
        marginBottom: 45
    },

    loginView: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    loginButton: {
        width: "90%",
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

export default SignInScreen
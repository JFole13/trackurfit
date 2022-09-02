import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AccountButton = ({onPress, text, type}) => {
    return (
        <View style={styles.loginView}>
            <TouchableOpacity onPress={onPress} style={[styles.loginButton, styles[`loginButton_${type}`]]}>
                <Text style={styles.loginButtonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginView: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    loginButton: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#249254",
    },

    loginButton_TERTIARY: {
        backgroundColor: '#0DD162',
        justifyContent: "flex-end"
    },

    loginButton_TERTIARY_UNDERLINED: {
        justifyContent: 'flex-start',
        backgroundColor: '#0DD162',
    },

    loginButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: '19',
        color: '#fff'
    },
})

export default AccountButton;
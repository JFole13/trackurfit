import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="placeholder" style={styles.input} />
            <TextInput placeholder="placeholder" style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center'
    },

    input: {
        width: '90%', 
        height: '25%',
        borderColor: '#C7D1CB',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 9,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        fontSize: 17
    }
})

export default CustomInput;
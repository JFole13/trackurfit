import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry} 
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
    },

    input: {
        width: '90%', 
        height: 45,
        borderColor: '#C7D1CB',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        fontSize: 17
    }
})

export default CustomInput;
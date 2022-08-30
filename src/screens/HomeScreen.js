import React from 'react';
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
 
      <StatusBar style="auto" />

      <View style={styles.logoView}>
        <Text style={styles.logoText}>TrackUrFit</Text>
        <Text style={styles.sloganText}>Get to the jim cocksucker</Text>
      </View>

      <View style={styles.loginView}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.signUpView}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0DD162",
      justifyContent: 'flex-end',
      alignItems: "center",
    },
  
    logoView: {
      width: '100%',
      height: '20%'
    },  
  
    logoText: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: '40',
      paddingLeft: 22
    },
  
    sloganText: {
      color: 'white',
      fontFamily: 'Poppins-Regular', 
      fontSize: '15',
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 15
    },
  
    loginView: {
      width: '100%',
      height: '12%',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    signUpView: {
      width: '100%',
      height: '20%',
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
   
    signUpButton: {
      width: "90%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#249254",
    },
  
    loginButtonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: '19',
      color: '#0DD162'
    },
  
    signUpButtonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: '19',
      color: '#fff'
    }
  });

  export default HomeScreen
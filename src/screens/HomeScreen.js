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
import AccountButton from '../components/AccountButton/AccountButton';

const HomeScreen = () => {

    const onSignInPressed = () => {
        console.log('ur signed in bitch');
    }

    const onCreateAccountPressed = () => {
        console.log('whyd u pick log in if you dont have an account');
    }


    return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />

      <View style={styles.logoView}>
        <Text style={styles.logoText}>TrackUrFit</Text>
        <Text style={styles.sloganText}>Get to the jim cocksucker</Text>
      </View>

      <AccountButton text="Log In" onPress={onSignInPressed} containerType="TERTIARY_HOME" 
                     type="TERTIARY_HOME" textType="TERTIARY_HOME"/>
      <AccountButton text="Sign Up" onPress={onCreateAccountPressed}/> 

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
      flex: 3,
      justifyContent: 'flex-end',
    },  
  
    logoText: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: '40',
      paddingLeft: 22,
    },
  
    sloganText: {
      color: 'white',
      fontFamily: 'Poppins-Regular', 
      fontSize: '15',
      paddingLeft: 22
    }
  });

  export default HomeScreen
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen"
import { useFonts } from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";


 
export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Idk</Text>;
  }
 
  return (
    <View style={styles.root}>
      <HomeScreen />
    </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})


 


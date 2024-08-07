import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from 'react-native-vector-icons'
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
    "Poppins-Light": Poppins_300Light,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-SemiBold": Poppins_600SemiBold,
  });
};

const LoginScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper}>
        <Ionicons name={"arrow-back-outline"} size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff8ec",
    marginTop:30,
    padding: 20,
  },
  backButtonWrapper: {
    height:40,
    width:40,
    backgroundColor: "#6F4E37",
    borderRadius:20,
    justifyContent:"center",
    alignItems: "center"
  },
  textContainer:{
    marginVertical:20,
  },
  headingText:{
    fontSize:32,
    color: "#82330c",
    fontFamily: "Poppins-SemiBold"
  },
})
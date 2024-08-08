import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "react-native-vector-icons";
import { useState } from "react";
import * as Font from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
    "Poppins-Light": Poppins_300Light,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-SemiBold": Poppins_600SemiBold,
  });
};

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntrty, setSecureEntrty] = useState(true);

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoback}>
        <Ionicons name={"arrow-back-outline"} size={25} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>Started</Text>
      </View>
      {/*form*/}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={30} color={"#82330c"} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={"#82330c"}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={30} color={"#82330c"} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={"#82330c"}
            secureTextEntry={secureEntrty}
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={"screen-smartphone"}
            size={30}
            color={"#82330c"}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone no"
            placeholderTextColor={"#82330c"}
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account!</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8ec",
    marginTop: 30,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#6F4E37",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 20,
    marginTop: 80,
  },
  headingText: {
    fontSize: 32,
    color: "#82330c",
    fontFamily: "Poppins-SemiBold",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#6F4E37",
    height: 60,
    paddingHorizontal: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Poppins-Light",
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#82330c",
    fontFamily: "Poppins-SemiBold",
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: "#6F4E37",
    borderRadius: 100,
    height: 60,
    marginVertical: 20,
  },
  loginText: {
    color: "#FFFF",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    padding: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: "#82330c",
    fontFamily: "Poppins-Regular",
  },
  signupText: {
    color: "#82330c",
    fontFamily: "Poppins-SemiBold",
  },
});

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "expo-router";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
    "Poppins-Light": Poppins_300Light,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-SemiBold": Poppins_600SemiBold,
  });
};

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () =>{
    navigation.navigate("Login");
  }

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Image
        source={require("@/assets/images/man.png")}
        style={styles.bannerImage}
      />
      <Text style={styles.title}>Artsays</Text>
      <Text style={styles.subTitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptatum veniam sapiente placeat quisquam sit!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: "#6F4E37" }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff8ec",
  },
  logo: {
    height: 40,
    width: 140,
    marginTop: 80,
  },
  bannerImage: {
    marginVertical: 40,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 36,
    fontFamily: "Poppins-Medium",
    paddingHorizontal: 20,
    color: "#82330c",
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#ECB176",
    fontFamily: "Poppins-Medium",
    marginTop: 40,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 80,
    borderWidth: 2,
    borderColor: "#6F4E37",
    borderRadius: 100,
    width: "80%",
    height: 60,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 100,
  },
  loginButtonText: {
    color: "#FFFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
});

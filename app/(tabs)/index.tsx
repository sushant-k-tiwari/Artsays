import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '@/components/HomeScreen/HomeScreen';
import WelcomeScreen from '@/components/WelcomeScreen';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {

  return (
    // <HomeScreen/>
    <HomeScreen />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown:false
    //     }}>
    //     <Stack.Screen
    //       name={'HOME'}
    //       component={HomeScreen} /> 
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

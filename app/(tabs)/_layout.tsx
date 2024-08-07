import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import WelcomeScreen from '@/components/WelcomeScreen';
import index from '@/app/(tabs)/index'
import explore from '@/app/(tabs)/explore'
import account from '@/app/(tabs)/account'
import LoginScreen from '@/components/Login/LoginScreen';

import { useColorScheme } from '@/hooks/useColorScheme';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#a37f4f",
        style: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={index}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        component={explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingBottom: 0,
    height: 60, 
  },
});

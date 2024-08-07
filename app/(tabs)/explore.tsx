import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';

export default function explore() {

  return (
    <SafeAreaView>
      <View>
        <Text>
            Account
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
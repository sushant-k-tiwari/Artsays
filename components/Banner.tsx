import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Banner: React.FC = () => {

  const banner = require('@/assets/images/art.png')

  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  text: {
    position: 'absolute',
    top: 16,
    left: 16,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Banner;

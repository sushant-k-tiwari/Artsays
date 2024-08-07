import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const deals = [
  { id: '1', name: 'Abstract', discount: 'Up to 20% Off', image: require('@/assets/images/abstract.png') },
  { id: '2', name: 'Fine Art', discount: 'Up to 40% Off', image: require('@/assets/images/fineart.png') },
  { id: '3', name: 'Paris', discount: 'Up to 25% Off', image: require('@/assets/images/paris.png') },
  // Add more deals as needed
];

const DealOfTheDay: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deal of the Day</Text>
      <FlatList
        data={deals}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.dealItem}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator = {false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dealItem: {
    alignItems: 'center',
    marginHorizontal: 12,
    borderColor: '#e1dce1',
    borderWidth:1,
    borderRadius:6,
  },
  image: {
    width: 120,
    height: 120,
    // borderRadius: 8,
  },
  discount: {
    color: 'red',
  },
});

export default DealOfTheDay;

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const hotSellingFootwear = [
  { id: '1', name: 'FareWell to Anger', price: 'Rs6499', discount: '20% Off', rating: '4.4', image: require('@/assets/images/farewelltoanger.png') },
  { id: '2', name: 'Nike blue running shoes', price: 'Rs2999', discount: '30% Off', rating: '4.2', image: 'https://via.placeholder.com/100x100' },
  // Add more items as needed
];

const HotSellingFootwear: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Sellers</Text>
      <FlatList
        data={hotSellingFootwear}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image } style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
            <Text>{item.rating}⭐</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  item: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  discount: {
    color: 'red',
  },
});

export default HotSellingFootwear;

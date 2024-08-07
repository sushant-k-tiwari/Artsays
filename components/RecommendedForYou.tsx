import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const recommendedItems = [
  { id: '1', name: 'Allen Solly Regular Fit', price: 'Rs 1499', discount: '25% Off', rating: '4.4', image: 'https://via.placeholder.com/100x100' },
  { id: '2', name: 'Calvin Klein Regular Fit', price: 'Rs 1999', discount: '20% Off', rating: '4.2', image: 'https://via.placeholder.com/100x100' },
  // Add more items as needed
];

const RecommendedForYou: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for You</Text>
      <FlatList
        data={recommendedItems}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
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

export default RecommendedForYou;

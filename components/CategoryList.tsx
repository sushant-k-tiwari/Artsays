import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'New Arrivals', icon: 'shirt-outline' },
  { id: '2', name: 'Best Sellers', icon: 'laptop-outline' },
  { id: '3', name: 'Artists', icon: 'bulb-outline' },
  { id: '4', name: 'Categories', icon: 'brush-outline' },
  { id: '5', name: 'Trends', icon: 'beer-outline' },
  { id: '6', name: 'Photography', icon: 'beer-outline' },
  // Add more categories as needed
];

const CategoryList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Ionicons name={item.icon} size={24} color="black" />
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  categoryName: {
    marginTop: 4,
  },
});

export default CategoryList;

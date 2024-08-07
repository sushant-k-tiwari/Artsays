import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

const ProductScreen = () => {
  const artPiece = {
    title: 'Vivaces',
    artist: 'Sylvie Demers',
    description: 'This vibrant art piece by Sylvie Demers adds a touch of color and life to any space. Perfect for art enthusiasts and interior decorators.',
    image: 'https://imgc.artprintimages.com/img/print/sylvie-demers-vivaces_u-l-f9yswe0.jpg?h=550&p=0&w=550&background=ffffff',
    price: '$39.99',
    dimensions: '20" x 30"',
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: artPiece.image }} style={styles.image} />
      <Text style={styles.title}>{artPiece.title}</Text>
      <Text style={styles.artist}>by {artPiece.artist}</Text>
      <Text style={styles.price}>{artPiece.price}</Text>
      <Text style={styles.dimensions}>Dimensions: {artPiece.dimensions}</Text>
      <Text style={styles.description}>{artPiece.description}</Text>
      <Button title="Add to Cart" onPress={() => { /* Add to cart functionality */ }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 8,
  },
  dimensions: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ProductScreen;

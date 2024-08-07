import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Anything..."
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
});

export default SearchBar;

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const products = [
  { id: '1', name: 'iPhone 13', price: '$799', image: require('../assets/iphone_13.jpg') },
  { id: '2', name: 'Samsung Galaxy S21', price: '$999', image: require('../assets/galaxy.jpg') },
  { id: '3', name: 'Google Pixel 6', price: '$599', image: require('../assets/pixel6.jpg') },
];

export default function ProductSelection({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
});

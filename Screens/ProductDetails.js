import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>
        This is a placeholder for the product description. You can add more details about the product here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

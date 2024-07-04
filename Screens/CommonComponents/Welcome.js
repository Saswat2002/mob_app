import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export default function Welcome({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('AuthOptions');
  };

  return (
    <ImageBackground
      source={require('../../assets/welcome.jpg')}
      style={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Mobile Select!</Text>
        <Text style={styles.subtitle}>
          Find the perfect mobile phone for you. Compare features, prices, and more.
        </Text>
        <Button title="Get Started" onPress={handleGetStarted} color="#841584" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
    padding: 16,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 32,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

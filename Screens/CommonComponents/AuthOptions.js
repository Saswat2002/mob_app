import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AuthOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an option</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color="#841584"
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registration')}
        color="#841584"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

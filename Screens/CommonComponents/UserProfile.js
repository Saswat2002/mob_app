import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function UserProfile({ navigation }) {
  const isLoggedIn = true;
  const name = "Saswat";

  const handleLogout = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text>{isLoggedIn ? `Hello, ${name}` : "Guest"}!</Text>
      {isLoggedIn && (
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={handleLogout} color="#841584" />
        </View>
      )}
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
  logoutContainer: {
    marginTop: 16,
  },
});

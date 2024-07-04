import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/CommonComponents/Welcome';
import UserProfile from './Screens/CommonComponents/UserProfile';
import ProductSelection from './Screens/ProductSelection';
import ProductDetails from './Screens/ProductDetails';
import Registration from './Screens/CommonComponents/Registration';
import Login from './Screens/CommonComponents/Login';
import AuthOptions from './Screens/CommonComponents/AuthOptions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AuthOptions" component={AuthOptions} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="ProductSelection" component={ProductSelection} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

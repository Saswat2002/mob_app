import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo icons

const Button = ({ kind, variant, size, iconOnly, onPress, label, icon }) => {
  // Determine styles based on props
  const buttonStyles = [
    styles.button,
    kind === 'primary' && styles.primary,
    kind === 'secondary' && styles.secondary,
    variant === 'outlined' && styles.outlined,
    size === 'large' && styles.large,
    size === 'small' && styles.small,
    iconOnly && styles.iconOnly,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {icon && <Ionicons name={icon} size={24} color="white" />} {/* Example with Ionicons */}
      {!iconOnly && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

// Default styles
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    backgroundColor: '#841584', // default background color
  },
  primary: {
    backgroundColor: '#841584', // primary button color
  },
  secondary: {
    backgroundColor: '#009688', // secondary button color
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#841584', // outlined button border color
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: 160,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 100,
  },
  iconOnly: {
    paddingHorizontal: 12,
    minWidth: 48,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Button;

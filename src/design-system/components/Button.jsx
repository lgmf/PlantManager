import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Colors } from '../palette';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
  },
});

function Button({ children }) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Colors } from '../palette';

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: Colors.heading,
  },
});

function Subtitle({ children }) {
  return (
    <Text style={styles.subtitle}>
      {children}
    </Text>
  );
}

export default Subtitle;

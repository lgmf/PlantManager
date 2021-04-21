import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Colors } from '../palette';

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.heading,
    marginTop: 38,
  },
});

function Title({ customStyles, children }) {
  return (
    <Text style={[customStyles, styles.title]}>
      {children}
    </Text>
  );
}

export default Title;

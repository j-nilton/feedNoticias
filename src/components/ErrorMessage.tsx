import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <View style={styles.box}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    padding: 12,
    margin: 12,
    borderRadius: 8,
    backgroundColor: '#fdecea'
  },
  text: {
    color: '#b00020'
  }
});

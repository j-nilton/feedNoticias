import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingIndicator: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../src/constants/config';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mensajes</Text>
      <Text style={styles.subtext}>Tus conversaciones aparecerán aquí</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

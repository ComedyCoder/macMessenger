import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({title, navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
          <Text style={styles.title}>{ title }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'coral',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
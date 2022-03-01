import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/pages/Home';

function App() {
  return <SafeAreaView style={styles.page}>
    <Home />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  }
})

export default App;
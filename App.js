import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Voice from './Voice';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>How do I get this thing to record my voice?</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text></Text>
        <Voice/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

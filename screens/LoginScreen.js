import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

import CocodrileSvg from '../images/CocodrileSvg';

/**
 * TODO:
 * Create components for: TextInput and Button
 * Remove all inline styles
 */
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={{ height: 147, width: 110 }}>
        <CocodrileSvg />
      </View>
      <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
        Welcome to Diginventory!
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={{ width: '100%', marginTop: 24 }}
        outlineStyle={{ borderRadius: 8 }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        style={{ width: '100%', marginTop: 8 }}
        outlineStyle={{ borderRadius: 8 }}
      />
      <View style={{ width: '100%', marginTop: 24 }}>
        <Button
          onPress={() => navigation.navigate('HomeNavigator')}
          mode="contained"
          style={{ width: '100%', marginTop: 24 }}>
          Log in
        </Button>
      </View>
      <Button onPress={() => navigation.navigate('HomeNavigator')}>
        Forgot your password
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    paddingHorizontal: 24,
  },
});
export default LoginScreen;

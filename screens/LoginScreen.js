import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput label="Email" mode="outlined" />
      <TextInput label="Password" mode="outlined" />
      <Button onPress={() => navigation.navigate('HomeNavigator')}>
        Press me
      </Button>
    </View>
  );
};

export default LoginScreen;

import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Login = () => {
  return (
    <View
      style={{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput label="Email" mode="outlined" />
      <TextInput label="Password" mode="outlined" />
    </View>
  );
};

export default Login;

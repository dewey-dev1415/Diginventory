/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import LoginStackNavigator from './navigators/LoginStackNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <LoginStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchCardScreen from '../screens/SearchCardScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="home" color={theme.colors.primary} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchCards"
        component={SearchCardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="search" color={theme.colors.primary} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon
              name="settings"
              color={theme.colors.primary}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'red',
  },
});
export default BottomTabNavigator;

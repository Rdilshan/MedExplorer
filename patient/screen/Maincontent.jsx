import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Tab/Home';
import Perception from './Tab/Perception';
import Profile from './Tab/Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Perception') {
              iconName = focused ? 'eye' : 'eye-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: true, // This will show the labels
          headerShown: false, // This will hide the header
          tabBarLabelStyle: { fontSize: 12 }, // Customize label style if needed
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Perception" component={Perception} options={{ tabBarLabel: 'Perception' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

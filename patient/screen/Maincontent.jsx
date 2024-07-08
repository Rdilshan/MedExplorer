import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Tab/Home';
import Perception from './Tab/Perception';
import Profile from './Tab/Profile';

const Tab = createBottomTabNavigator();

// Define the route names
const homeName = 'Home';
const perceptionName = 'Perception';
const profileName = 'Profile';

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === perceptionName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen 
        name={homeName} 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name={perceptionName} 
        component={Perception} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name={profileName} 
        component={Profile} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

export default MainContainer;

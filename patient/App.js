import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIN from './screen/SignIn';
import MainContainer from './screen/Maincontent';
import Notification from './screen/Notification';
import SearchDruges from './screen/SearchDruges';
import LHome from './screen/LHome';
import Onboardings from './screen/OnBording';
import Register from './screen/Register';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LHome" screenOptions={{ headerShown: false }}>
         <Stack.Screen
          name="LHomes"
          component={LHome}
          options={{ headerShown: false }} // Hide the header for the Onboarding screen
        />
         <Stack.Screen name="OnBording" component={Onboardings} />
        <Stack.Screen name="SignIn" component={SignIN} />
        <Stack.Screen name="Register" component={Register} />
        
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

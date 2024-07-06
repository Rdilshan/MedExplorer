import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIN from './screen/SignIn';
import MainContainer from './screen/Maincontent';
import Register from './screen/Register';
import EnterNewPassword from './screen/EnterNewPassword';
import LHomes from './screen/LHome'; 
import Onboardings from './screen/OnBording';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LHomes" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LHomes" component={LHomes} />
        <Stack.Screen name="onboarding" component={Onboardings} />
        <Stack.Screen name="SignIn" component={SignIN} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="EnterNewPassword" component={EnterNewPassword} />
      </Stack.Navigator>
      <StatusBar style="auto" />
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
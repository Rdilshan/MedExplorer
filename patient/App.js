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
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import ProfileL from './screen/ProfileL';
const Stack = createNativeStackNavigator();

const toastConfig = {
	success: (props) => (
	  <BaseToast
		{...props}
		style={{ borderLeftColor: 'green' }}
		contentContainerStyle={{ paddingHorizontal: 20 }}
		text1Style={{
		  fontSize: 17,
		  fontWeight: 'bold'
		}}
		text2Style={{
			fontSize: 15
		  }}
	  />
	),
	
	error: (props) => (
	  <ErrorToast
	  
		{...props}
		text1Style={{
		  fontSize: 17
		}}
		text2Style={{
		  fontSize: 15
		}}
	  />
	),
	
	tomatoToast: ({ text1, props }) => (
	  <View style={{ height: 60, width: '100%', backgroundColor: 'red' }}>
		<Text>{text1}</Text>
		<Text>{props.uuid}</Text>
	  </View>
	)
  };
  

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
		<Stack.Screen name="Profile" component={ProfileL} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} />
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
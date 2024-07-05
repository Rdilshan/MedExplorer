import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIN from './screen/SignIn';
import MainContainer from './screen/Maincontent';
import Register from './screen/Register';
import EnterNewPassword from './screen/EnterNewPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIN} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="EnterNewPasswor" component={EnterNewPassword}/>
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

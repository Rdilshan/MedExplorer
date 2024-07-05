import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIN from './screen/SignIn';
import MainContainer from './screen/Maincontent';
import Register from './screen/Register'
import registerNNPushToken from 'native-notify';
import { useEffect } from 'react';


export default function App() {

// registerNNPushToken(22292, "0OCZaZsKvWSdD51gjla2bL");
  return (
    <Register/>
  );
}


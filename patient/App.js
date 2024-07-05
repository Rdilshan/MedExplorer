import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIN from './screen/SignIn';
import MainContainer from './screen/Maincontent';
import Register from './screen/Register'
import registerNNPushToken from 'native-notify';
import { useEffect } from 'react';
import { REGISTER_NN_PUSH_TOKEN_ID, REGISTER_NN_PUSH_TOKEN_SECRET } from '@env';

export default function App() {
  useEffect(() => {
    registerNNPushToken(REGISTER_NN_PUSH_TOKEN_ID, REGISTER_NN_PUSH_TOKEN_SECRET);
}, []);
  return (
    <Register/>
  );
}


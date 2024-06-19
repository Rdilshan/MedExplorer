import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function SignIN() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const userData = {
      email,
      password,
    };
  
    try {
      const response = await axios.post(
        "https://med-explorer-backend.vercel.app/doctor/login",
        userData
      );
    
      if (response.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Login successful!',
          text2: 'Move to work.',
          visibilityTime: 2000,
        });
        setTimeout(() => {
          navigation.navigate("Dashboard");
        }, 2000);
      } else if (response.status === 400) {
        console.log("400 error:", response.data);
        Toast.show({
          type: 'error',
          text1: 'Login failed.',
          text2: 'Invalid email or password.',
          visibilityTime: 2000,
        });
      } else if (response.status === 403) {
        Toast.show({
          type: 'error',
          text1: 'Login failed.',
          text2: 'Account is not verified. Please contact support.',
          visibilityTime: 2000,
        });
      } else {
        console.error("Unexpected response status:", response.status);
        Toast.show({
          type: 'error',
          text1: 'Login failed.',
          text2: 'An unexpected error occurred. Please try again later.',
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login failed.',
        text2: 'Account is not verified or server error.',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Email address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={setPassword}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, styles.passwordInput]}
                secureTextEntry={!passwordVisible}
                value={password}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.icon}>
                <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('NewPasswordone')}>
            <Text style={styles.formLink}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register")
            }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:5,
    marginHorizontal:20
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    height: 44,
  },
  icon: {
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'right',
  },
});

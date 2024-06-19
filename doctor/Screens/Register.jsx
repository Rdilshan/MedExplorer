import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import axios from 'axios';

export default function Example() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');
  const [SIMC, setSIMC] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  
  const handleRegister = () => {
    const userData = {
      name,
      email,
      NIC,
      SIMC,
      password
    };
  
    axios.post("https://med-explorer-backend.vercel.app/doctor/create", userData)
    .then(res => {
      Toast.show({
        type: 'success',
        text1: 'Registration successful!',
        text2: 'Please wait for SIMC verification.',
        visibilityTime:10000
      });
      setTimeout(() => {
        navigation.navigate("Profile"); 
      }, 10000);
    })
    .catch(error => {
      Toast.show({
        type: 'error',
        text1: 'Error registering.',
        text2: 'Please try again.',
        visibilityTime:10000
      });
    });
  };
  
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Fill your information below or register with your social account
          </Text>
        </View>

        <ScrollView style={styles.form}
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       showsVerticalScrollIndicator={false}
        >
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setName}
              placeholder="Full Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Email Address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>NIC Number</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setNIC}
              placeholder="NIC Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={NIC}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>SIMC ID</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setSIMC}
              placeholder="SIMC ID"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={SIMC}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, styles.passwordInput]}
                secureTextEntry={!passwordVisible}
                value={password}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.icon}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={24}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleRegister}
              disabled={isLoading}
            >
              <View style={styles.btn}>
                {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Register</Text>}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
      </KeyboardAvoidingView>
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
});

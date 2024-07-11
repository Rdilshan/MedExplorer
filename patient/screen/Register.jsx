import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const { width } = Dimensions.get('window');


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    const userData = {
      name,
      email,
      NIC,
      password
    };

    axios.post("https://med-explorer-backend.vercel.app/patient/create", userData)
      .then(res => {
        if (res.status === 201) {
          Toast.show({
            type: 'success',
            text1: 'Registration successful!',
            text2: 'Please login.',
            visibilityTime: 10000
          });
          setIsLoading(false);
          setTimeout(() => {
            navigation.navigate("SignIn");
          }, 1000);

        }
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Error registering.',
          text2: 'Please try again.',
          visibilityTime: 10000
        });
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Fill your information below or register with your social account
          </Text>
        </View>

        <View style={styles.form}>
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
            <Text style={styles.inputLabel}>Nic Number</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setNIC}
              placeholder="Nic Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={NIC}
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
                style={[styles.inputControl, { flex: 1 }]}
                secureTextEntry={!showPassword}
                value={password}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={20}
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

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or sign up with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialLogin}>
            <TouchableOpacity onPress={() => { /* handle Facebook login */ }}>
              <View style={styles.socialBtn}>
                <Icon name="facebook" size={30} color="#3b5998" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { /* handle Gmail login */ }}>
              <View style={styles.socialBtn}>
                <Icon name="google" size={30} color="#db4a39" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { /* handle Apple login */ }}>
              <View style={styles.socialBtn}>
                <Icon name="apple" size={30} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 36,
    alignItems: 'center',
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
    width: width * 0.9,
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
    paddingHorizontal: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
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
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#6b7280',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
  },
  socialBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1d1d1d',
  },
});

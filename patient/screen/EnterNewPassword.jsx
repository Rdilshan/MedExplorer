import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function EnterNewPassword() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>New Password</Text>

          <Text style={styles.subtitle}>Your new password must be different with previously used passsword</Text>
        </View>

        <View style={styles.form}>
        <View style={styles.passwordContainer}>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={!showPassword} 
                value={form.password}
              />
              <TouchableOpacity
                style={styles.toggleIcon}
                onPress={togglePasswordVisibility}
              >
                <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Create New Password</Text>
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
    paddingHorizontal: 25,
    paddingVertical: 20,
    flex: 1,
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

    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  toggleIcon: {
    padding: 8,
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
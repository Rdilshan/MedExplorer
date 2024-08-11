import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import axios from 'axios';


export default function NewPasswordone({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: ''
  });


  async function onsubmit() {
    setIsLoading(true);
    console.log(form)


    try {
      const response = await axios.post(
        "https://med-explorer-backend.vercel.app/patient/otpsend",
        { email: form.email }
      );
      if (response.status === 200) {

        setIsLoading(false);

        Toast.show({
          type: 'success',
          text1: 'Email send successfully.',
          text2: 'Move to work.',
          visibilityTime: 2000,
        });

        navigation.navigate('Entercode', {
          email: form.email
        });

      }

    } catch (error) {

      console.log("400 error:", error.response.data);
      Toast.show({
        type: 'error',
        text1: 'failed.',
        text2: 'Try agin!',
        visibilityTime: 2000,
      });
      setIsLoading(false);

    }
  }
  // const navigation=useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerAction} onPress={() => navigation.navigate("SignIn")}>
            <FeatherIcon name="arrow-left" size={24} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.title}>New Password</Text>

          <Text style={styles.subtitle}>Your new password must be different with previously used password</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Enter email address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>


          <View style={styles.formAction}>
            <TouchableOpacity onPress={onsubmit} disabled={isLoading}>
              <View style={styles.btn}>
                {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Next Progress</Text>}
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
    paddingVertical: 10
  },
  header: {
    marginVertical: 36,
  },
  headerAction: {
    width: 40,
    height: 40,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 5
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
  /** Form */
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
  /** Input */
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
  /** Button */
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
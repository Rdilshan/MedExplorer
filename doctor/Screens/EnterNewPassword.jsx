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
import { useNavigation,useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import axios from 'axios';


export default function EnterNewPassword() {

  const route = useRoute();
  const { doctorid } = route.params;

  const [form, setForm] = useState({
    password: '',
  });
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onsubmit(){

  if(form.password != ""){
    console.log(form.password)

    try {
      const response = await axios.post(
        "https://med-explorer-backend.vercel.app/doctor/updatepwd",
        { doctorid: doctorid,
          newpassword:form.password
         }
      );
      if (response.status === 200) {

        console.log(response.data);
        setIsLoading(false);

        Toast.show({
          type: 'success',
          text1: 'Updated Successfully',
          text2: 'Move to work.',
          visibilityTime: 2000,
        });

        navigation.navigate("SignIn")
      }
      
    } catch (error) {
      console.log("400 error:", error.response.data);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please try again.',
          visibilityTime: 2000,
        });
    }

  }else{
    Toast.show({
      type: 'error',
      text1: 'Enter New Password',
      text2: 'Please try again.',
      visibilityTime: 2000,
    });
  }

}

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
            <TouchableOpacity onPress={onsubmit} disabled={isLoading}>
              <View style={styles.btn}>
                {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Create New Password</Text>}
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
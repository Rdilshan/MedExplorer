import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigation();
  const handleRegister = () => {
    // setIsLoading(true);
    // const userData = {
    //   name,
    //   email,
    //   NIC,
    //   password
    // };

    // axios.post("https://med-explorer-backend.vercel.app/patient/create", userData)
    //   .then(res => {
    //     if (res.status === 201) {
          // Toast.show({
          //   type: 'success',
          //   text1: 'Registration successful!',
          //   text2: 'Please wait for SIMC verification.',
          //   visibilityTime: 10000
          // });
          // setIsLoading(false);
          // setTimeout(() => {
          //   navigation.navigate("SignIn");
      //     // }, 1000);
      //     console.log("registedred");
      //   }
      // })
      // .catch(error => {
        // Toast.show({
        //   type: 'error',
        //   text1: 'Error registering.',
        //   text2: 'Please try again.',
        //   visibilityTime: 10000
        // });
        // setIsLoading(false);
        // console.log(error);
      // });
  };




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Fill your information below or register with your social account</Text>
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
              value={name} />
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
              value={email} />
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
              value={NIC} />
          </View>
{/* 
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Simc ID</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={SimcId => setForm({ ...form, SimcId })}
              placeholder="Simc ID"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.SimcId} />
          </View> */}

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={password} />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleRegister}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
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
    padding: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 350
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

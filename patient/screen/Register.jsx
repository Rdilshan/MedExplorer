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

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    nicNumber:'',
    SimcId:'',
    password: '',
  });

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
              onChangeText={fullName => setForm({ ...form, fullName })}
              placeholder="Full Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.fullName} />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Email Address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nic Number</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={nicNumber => setForm({ ...form, nicNumber })}
              placeholder="Nic Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.nicNumber} />
          </View>

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
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="Password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
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

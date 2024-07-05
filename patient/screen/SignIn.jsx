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
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SignIN() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Hi! Welcome back, You’ve been missed</Text>
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
              placeholder="Email address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="Password"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { flex: 1 }]}
                secureTextEntry={!showPassword}
                value={form.password}
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

          <Text style={styles.formLink}>Forgot password?</Text>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => navigation.navigate('MainContainer')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp('4%'),
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: wp('97%'),
    alignSelf: 'center',
  },
  header: {
    marginVertical: hp('8%'),
  },
  title: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Form */
  form: {
    marginBottom: hp('3%'),
  },
  formAction: {
    marginVertical: hp('3%'),
  },
  formFooter: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  /** Input */
  input: {
    marginBottom: hp('2%'),
  },
  inputLabel: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#222',
    marginBottom: hp('1%'),
  },
  inputControl: {
    height: hp('6%'),
    backgroundColor: '#f1f5f9',
    paddingHorizontal: wp('4%'),
    borderRadius: 12,
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#222',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: wp('4.5%'),
    lineHeight: hp('3%'),
    fontWeight: '600',
    color: '#fff',
  },
  formLink: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'right',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  dividerText: {
    marginHorizontal: wp('2%'),
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#6b7280',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
  },
  socialBtnText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#1d1d1d',
  },
});

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileL() {
  const [form, setForm] = useState({
    gender: '',
    phoneNumber: '',
  });
  const [hasPermission, setPermission] = useState(null);
  const [profileImage, setProfileImage] = useState("https://previews.123rf.com/images/djvstock/djvstock1707/djvstock170702217/81514827-doctor-profile-cartoon-icon-vector-illustration-graphic-design.jpg");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    if (hasPermission === false) {
      Alert.alert("No access to internal storage");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log("this img")
      console.log(result);
      console.log(result.assets[0].uri)
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Complete Your Profile</Text>
          <Text style={styles.subtitle}>
            Don't worry only you can see your personal data. No one else can see it.
          </Text>
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="camera" size={48} color="#6b7280" />
          )}
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.phoneContainer}>
              <TextInput
                placeholder='+94'
                keyboardType='numeric'
                style={styles.countryCode}
              />
              <TextInput
                placeholder='Enter your phone number'
                keyboardType='numeric'
                onChangeText={phoneNumber => setForm({ ...form, phoneNumber })}
                style={styles.phoneInput}
                value={form.phoneNumber}
              />
            </View>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Gender</Text>
            <RNPickerSelect
              onValueChange={(gender) => setForm({ ...form, gender })}
              items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
              ]}
              placeholder={{ label: 'Select your gender', value: null }}
              style={pickerSelectStyles}
              value={form.gender}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Update</Text>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
  phoneContainer: {
    width: '100%',
    height: 48,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  countryCode: {
    width: '12%',
    borderRightWidth: 1,
    borderRightColor: '#d1d5db',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#f1f5f9',
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  phoneInput: {
    width: '88%',
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  imagePicker: {
    alignSelf: 'center',
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#6b7280',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputAndroid: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
});

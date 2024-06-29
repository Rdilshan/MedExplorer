import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Ionicons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import api from './api/doctorapi';
import useDoctorData from "./store/useDoctorData";



export default function Profile() {


  const [form, setForm] = useState({
    gender: '',
    phoneNumber: '',
  });

  const [hasPermission, setPermission] = useState(null);
  const [profileImage, setProfileImage] = useState("https://previews.123rf.com/images/djvstock/djvstock1707/djvstock170702217/81514827-doctor-profile-cartoon-icon-vector-illustration-graphic-design.jpg");
  const [isLoading, setIsLoading] = useState(false);

  const doctorData = useDoctorData();
  useEffect(() => {
    if (doctorData) {
      setProfileImage(doctorData.ProfileIMG);
      setForm({
        gender: doctorData.Gender,
        phoneNumber: doctorData.PhoneNumber,
      });
    }
  }, [doctorData]);

  useEffect(() => {

    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    if (hasPermission === false) {
      return <Text>No access to internal storage</Text>;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };


  const generateRandomName = () => {
    return 'photo_' + Math.random().toString(36).substr(2, 9) + '.jpg';
  };

  const onSubmit = async () => {
    setIsLoading(true);
    console.log("clicking ....");

    try {
      const formData = new FormData();
      formData.append('image', {
        uri: profileImage,
        type: 'image/jpeg',
        name: generateRandomName(),   
      });

      const uploadResponse = await axios.post(
        'https://med-explorer-backend.vercel.app/doctor/uploadimg',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          timeout: 60000, // Increase timeout to 60 seconds
        }
      );
      return uploadResponse.data.fileUrl;

    } catch (error) {
      console.error('Error during image upload:', error);
      if (error.response && error.response.status === 504) {
        Alert.alert('Error', 'The server took too long to respond. Please try again later.');
      } else {
        Alert.alert('Error', 'Failed to upload image.');
      }
      throw error;
    } 
    
    
  };

  const formdatasave = async (firstResponseData) => {
    try {
      console.log("form save running ...");
      const response = await api.post('/doctor/editprofile', {
        img: firstResponseData,
        telephone: form.phoneNumber,
        gender: form.gender,
      }, {
        timeout: 60000, // Increase timeout to 60 seconds
      });
      console.log('Form data save response:', response.data);
      Alert.alert('Successfull', 'Profile updated succefully!');
     
      return response.data;
    
    } catch (error) {
      console.error('Error during form data save:', error);
      if (error.response && error.response.status === 504) {
        Alert.alert('Error', 'The server took too long to respond. Please try again later.');
      } else {
        Alert.alert('Error', 'Failed to save form data.');
      }
      throw error;
    }
  };

  const handleSequentialCalls = async () => {
    try {
      const firstResponse = await onSubmit();
      const secondResponse = await formdatasave(firstResponse);
      console.log('Second response data:', secondResponse);
      setIsLoading(false);
    } catch (error) {
      console.error('Error in sequential calls:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Complete Your Profile</Text>
          <Text style={styles.subtitle}>
            Don't worry, only you can see your personal data. No one else can see it.
          </Text>
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="camera" size={48} color="#6b7280" />
          )}
          <Ionicons name="create-outline" size={24} color="#fff" style={styles.editIcon} />
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
            <TouchableOpacity onPress={handleSequentialCalls} disabled={isLoading}>
              <View style={styles.btn}>
                {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Update</Text>}
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
    marginVertical: 20,
    marginHorizontal: 20,
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
    width: "100%",
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
    width: "12%",
    borderRightWidth: 1,
    borderRightColor: '#d1d5db',
    height: "100%",
    textAlign: 'center',
    backgroundColor: '#f1f5f9',
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  phoneInput: {
    width: "88%",
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  imagePicker: {
    alignSelf: 'center',
    marginVertical: 16,
    borderWidth: 2,
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
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007aff',
    padding: 6,
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

import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
import api from './api/doctorapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePredict } from './store/PredictContext';

export default function Preview({ route }) {

  const navigation = useNavigation();
  const { imageUri } = route.params;
  const { age } = route.params;
  const { name } = route.params;
  const { patientid } = route.params;

  const [uploadimg, setuploadimg] = useState("");
  const [predicresult, setpredicresult] = useState("");

  const { predictResult, setPredictResult } = usePredict();
  const [showButtons, setShowButtons] = useState(false);

  const handleConvertToReadPress = async () => {

    try {
      const response = await api.post('/doctor/prediction', {
        image: uploadimg
      });
      console.log(response.data.data)
      setpredicresult(response.data.data)
      setPredictResult(response.data.data)
    } catch (error) {
      if (error.response.data.error === 'Invalid authorization') {
        await AsyncStorage.removeItem('token');
        navigation.navigate("SignIn");
      }
    }

    setShowButtons(true);
  };


  const generateRandomName = () => {
    return 'photo_' + Math.random().toString(36).substr(2, 9) + '.jpg';
  };

  useEffect(() => {
    console.log("uploading....")
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: generateRandomName(),
      });

      try {
        const uploadResponse = await axios.post(
          'https://med-explorer-backend.vercel.app/doctor/uploadimg',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            timeout: 60000, // Increase timeout to 60 seconds
          }
        );
        console.log('Image uploaded successfully:', uploadResponse.data);
        setuploadimg(uploadResponse.data.fileUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    uploadImage();
  }, [imageUri]);

  const handleSendPress = () => {
    navigation.navigate('Confirme', {
      imageUri: uploadimg,
      age: age,
      name: name,
      patientid: patientid

    });

  };

  return (
    <View style={styles.previewContainer}>
      <Text style={styles.previewText}>This is the Preview of Prescription</Text>
      <Image source={{ uri: imageUri }} style={styles.previewImage} />
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>


          {!showButtons && (
            <TouchableOpacity style={styles.sendButton} onPress={handleConvertToReadPress}>
              <Text style={styles.convertButtonText}>Convert to Read</Text>
            </TouchableOpacity>
          )}

          {showButtons && (
            <>
              <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('Pread')}>
                <Text style={styles.convertButtonText}>Checking</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                <Text style={styles.sendButtonText}>Done</Text>
              </TouchableOpacity>
            </>
          )}


        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  previewImage: {
    width: width * 0.9,
    height: height * 0.7,
    borderColor: "black",
    borderWidth: 1,
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#33b249",
    padding: 10,
    marginVertical: 4,
    borderRadius: 3,
  },
  convertButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ED0800",
    padding: 10,
    marginVertical: 4,
    borderRadius: 3,
  },
});

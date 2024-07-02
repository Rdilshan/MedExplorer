import React, {useEffect, useState } from 'react';

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

export default function Preview({ route }) {
  const navigation = useNavigation();
  const { imageUri } = route.params;
  const { age } = route.params;
  const { name } = route.params;
  const [uploadimg,setuploadimg] = useState("")


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
    });

  };

  return (
    <View style={styles.previewContainer}>
      <Text style={styles.previewText}>This is the Preview of Prescription</Text>
      <Image source={{ uri: imageUri }} style={styles.previewImage} />
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('Pread')}>
            <Text style={styles.convertButtonText}>Conver to Read</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
            <Text style={styles.sendButtonText}>Done</Text>
          </TouchableOpacity>
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

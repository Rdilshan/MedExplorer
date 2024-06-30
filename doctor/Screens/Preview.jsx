import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");

export default function Preview({ route }) {
  const navigation = useNavigation();
  const { imageUri } = route.params;
  const handleSendPress = () => {
    navigation.navigate('Confirme', { imageUri });
  };

  return (
    <View style={styles.previewContainer}>
      <Text style={styles.previewText}>This is the Preview of Prescription</Text>
      <Image source={{ uri: imageUri }} style={styles.previewImage} />
      <View style={{ display:"flex" , flexDirection:"row",gap:20}}>
      <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
        <Text style={styles.sendButtonText}>Complete</Text>
      </TouchableOpacity>
     
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
    backgroundColor: "green",
    padding: 10,
    marginVertical: 4,
    borderRadius: 3,
  },
});

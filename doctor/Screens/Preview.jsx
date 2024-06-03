
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Preview({ route }) {
  const { imageUri } = route.params;

  return (
    <View style={styles.previewContainer}>
      <Text style={styles.previewText}>Image Preview:</Text>
      <Image source={{ uri: imageUri }} style={styles.previewImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewText: {
    fontSize: 18,
    marginBottom: 10,
  },
  previewImage: {
    width: width * 0.9,
    height: height * 0.7,
    borderColor: 'black',
    borderWidth: 1,
  },
});

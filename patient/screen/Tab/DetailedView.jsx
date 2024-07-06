// DetailedView.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function DetailedView({ onClose }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/images.jpg')}
        style={styles.fullImage}
      />
      <TouchableOpacity style={styles.moreReadableButton} onPress={onClose}>
        <Text style={styles.moreReadableButtonText}>More Readable</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  fullImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  moreReadableButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  moreReadableButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default DetailedView;

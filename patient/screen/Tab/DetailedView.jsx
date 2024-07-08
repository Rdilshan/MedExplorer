import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailedView = ({ prescription, onClose }) => {
  if (!prescription) {
    return null;
  }
  console.log('Prescription data:', prescription.image);
  const handleImageError = (error) => {
    console.error('Image failed to load:', error.nativeEvent.error);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      
        <Image   source={{ uri: prescription.image}} style={styles.image} />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  content: {
    width: '80%',
    padding: 20,
    height:'80%',
    backgroundColor: 'white',
    borderRadius: 10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
    
  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width:500,
    height:500,
    resizeMode: 'contain',
    borderWidth:2,

  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0165FC',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetailedView;

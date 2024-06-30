import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default function Pread() {
    const [text, setText] = useState('Prescription details:\n\nDaily Medications:\n- Drug 1: Dosage\n- Drug 2: Dosage\n- Drug 3: Dosage');

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textarea, { height: screenHeight * 0.9 }]}
        multiline={true}
        placeholder="Enter text here"
        value={text}
        onChangeText={(newText) => setText(newText)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textarea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginTop: 20,
    fontSize:20
  },
});

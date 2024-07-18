import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

const { height: screenHeight } = Dimensions.get('window');
import { usePredict } from './store/PredictContext';



export default function Pread() {
  // const route = useRoute();
  // const { predicresult } = route.params;

  const navigation = useNavigation();

  const { predictResult, setPredictResult } = usePredict();
  const [text, setText] = useState('');

  useEffect(() => {
    if (predictResult && predictResult.length > 0) {
      console.log(predictResult); // ["Gentamicin", "Penicillin V", "Amoxicillin", "Clavulanic acid"]
      const formattedResult = predictResult.join('\n');
      setText(formattedResult);
    }
  }, [predictResult]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textarea, { height: screenHeight * 0.9 }]}
        multiline={true}
        placeholder="Enter text here"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

      <TouchableOpacity style={styles.sendButton} onPress={() => {
        setPredictResult(text.split('\n'));
        navigation.goBack()
      }}>
        <Text >Done</Text>
      </TouchableOpacity>
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
    fontSize: 20
  },
  sendButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#33b249",
    padding: 10,
    marginVertical: 4,
    borderRadius: 3,
  },

});

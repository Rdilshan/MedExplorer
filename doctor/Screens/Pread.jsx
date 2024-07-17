import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

const { height: screenHeight } = Dimensions.get('window');



export default function Pread() {
  const route = useRoute();
  const { predicresult } = route.params;

  const navigation = useNavigation();
  const [text, setText] = useState('');

  useEffect(() => {
    if (predicresult) {
      const formattedResult = predicresult.map((drug) => `${drug}`).join('\n');
      const updatedText = `${text}\n${formattedResult}`;
      setText(updatedText);
    }
  }, [predicresult]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textarea, { height: screenHeight * 0.9 }]}
        multiline={true}
        placeholder="Enter text here"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.goBack()}>
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

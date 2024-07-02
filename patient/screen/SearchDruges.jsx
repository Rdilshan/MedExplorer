import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; // Ensure the necessary icons are imported

export default function SearchDruges() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <EvilIcons style={{ marginBottom: 175, marginLeft:-25 }} name="arrow-left" size={55} color="white" />
        <Image
          source={require('../assets/3687af9d-7e14-43ee-999b-7c9f3a341b9d-fotor-bg-remover-20240702112145.png')} // Adjust the path as needed
          style={styles.topImage}
        />
      </View>

      <View style={styles.bottom}>
        {Array(7).fill().map((_, index) => (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.text1}>Vitamin D plus Capsule</Text>
            <Text style={styles.text2}>$20.00</Text>
            <Text style={styles.text3}>A health supplement in the form of multivitamin with a special focus on Vitamin D. Vitamin D is used for preventing and treating Rickets.</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 30,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: '#000',
    height: 337, // Adjusted height to be more realistic
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  bottom: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25, // Adjusted margin to align properly with the top section
  },
  topImage: {
    width: 250, // Adjust width as needed
    height: 240, // Adjust height as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
    position: 'absolute', // Positioning the image absolutely within the top view
    bottom: 40,
    marginLeft: 70,
  },
  itemContainer: {
    padding: 5,
    marginTop: 5,
  },
  text1: {
    fontWeight: "600",
    fontSize: 20,
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
  },
  text3: {
    marginTop: 5,
  },
});

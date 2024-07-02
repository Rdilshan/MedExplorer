import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; // Ensure the necessary icons are imported

export default function SearchDruges() {
  return (
    <View style={styles.container}>
    
      <View style={styles.top}>
        <EvilIcons style={{marginBottom:156}} name="arrow-left" size={55} color="white" />
        
        <Image
          source = {
            require('../assets/3687af9d-7e14-43ee-999b-7c9f3a341b9d-fotor-bg-remover-20240702112145.png')
          } // Adjust the path as needed
          style={styles.topImage}
        />
         
      </View>
       
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 70,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomLeftRadius: 18,
    // borderBottomRightRadius: 18,
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
    flex: 1, // This allows the bottom part to take up the remaining space
    backgroundColor: "white",
    paddingHorizontal: 20,
    padding: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25, // Adjusted margin to align properly with the top section
  },
  topImage: {
    width: 220, // Adjust width as needed
    height: 200, // Adjust height as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
    position: 'absolute', // Positioning the image absolutely within the top view
    bottom: 40,
    marginLeft:70
  },
});

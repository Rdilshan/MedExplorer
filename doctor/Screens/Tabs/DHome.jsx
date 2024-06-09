import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.icon}
          />
          <Ionicons name="notifications" size={30} color="white" />
        </View>
        <View style={styles.row1}>
          <Text style={styles.greeting}>Hello, Doctor</Text>
          <MaterialIcons name="waving-hand" size={30} color="#FFD43B" style={styles.waveIcon} />
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors here"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 40, // Decreased padding
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    width: '100%',
    alignItems: 'center', // Center contents horizontally
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 19,
    color: 'white',
    marginTop: 26, // Space between the row and the greeting text
    marginRight: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, // Add some space between the row and the search bar
  },
  waveIcon: {
    marginLeft: 10,
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '90%',
    backgroundColor: '#0165FC',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10, 
    borderColor: '#FFFFFF', // Set border color to white
    borderWidth: 1, // Set border width
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white', // Optional: Make the input text white
  },
});


import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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
        <Text style={styles.greeting}>Hello, Doctor</Text>
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
    paddingVertical: 65,
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
    marginTop: 16, // Space between the row and the greeting text
    marginRight:150
  },
});

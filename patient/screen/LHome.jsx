import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import Mock from "../assets/mock.png";

export default function LHomes() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Mock} style={{ marginTop: 80 }} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottom_head}>
          Read and Understand <Text style={{ color: '#0165FC' }}>Prescription</Text>
        </Text>
        <Text style={styles.bottom_des}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        </Text>
        <TouchableOpacity style={styles.bottom_btn} onPress={() => navigation.navigate('Onboardings')}>
          <Text style={styles.btn_dec}>Let’s Get Started</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: '#0165FC' }}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  top: {
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    backgroundColor: "white",
    paddingHorizontal: 20,
    width: "100%",
    height: "auto",
    padding: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -85,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 10.32,
    elevation: 10,
  },
  bottom_head: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  bottom_des: {
    textAlign: "center",
    marginVertical: 30,
    fontSize: 15,
    lineHeight: 25,
    fontWeight: "300",
  },
  bottom_btn: {
    alignItems: "center",
    backgroundColor: "#0165FC",
    paddingVertical: 16,
    paddingHorizontal: 100,
    borderRadius: 40,
    marginBottom: 20,
  },
  btn_dec: {
    color: "white",
    fontSize: 15,
  },
});

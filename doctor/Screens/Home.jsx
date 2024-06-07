import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Mock from "../assets/mock.png";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Mock} style={{ marginTop: 80 }} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottom_head}>
         
          Write and share Prescription easily
        </Text>
        <Text style={styles.bottom_des}>
          MedExplorer is the platform for doctors to share their prescriptions
          easily with patients
        </Text>
        <TouchableOpacity style={styles.bottom_btn}  onPress={() => navigation.navigate('Onboarding')}>
          <Text style={styles.btn_dec}>Let’s Get Started</Text>
        </TouchableOpacity >
        <Text>Already have an account ? <Text style={{ color:'#0165FC' }}>Sign In</Text></Text>
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
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  btn_dec: {
    color: "white",
    fontSize: 15,
  },
});

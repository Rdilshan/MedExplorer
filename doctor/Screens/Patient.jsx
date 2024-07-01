import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import api from './api/doctorapi';
import Toast from 'react-native-toast-message';



export default function Patient() {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState(null);
  const [data, setdata] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const navigation = useNavigation();

  const route = useRoute();
  const { nic } = route.params;
  console.log(nic)



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/patient/get/${nic}`);
        console.log(response.data);
        setdata(response.data)
      } catch (error) {

        if (error.response.status === 404) {
          Toast.show({
            type: 'error',
            text1: 'Validation Error',
            text2: 'NIC number is Wrong!',
            visibilityTime: 1500,
          });

          setTimeout(() => {
            navigation.navigate("Pnumber");
          }, 1600);

        }
        if (error.response && error.response.data.error === 'Invalid authorization') {
          await AsyncStorage.removeItem('token');
          navigation.navigate("SignIn");
        } else {
          console.error(error); // Handle other potential errors
        }
      }
    };

    fetchUserData();
  }, [nic, navigation]);


  const handleCheckboxPress = () => {
    setIsOwner(!isOwner);
    if(!isOwner){
      console.log(data)
      setPatientName(data.name)
    }else{
      setPatientName("")
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-circle-outline" size={40} color="gray"
        onPress={() => navigation.navigate('Pnumber')} style={{ marginLeft: 15 }}
      />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#1d1d1d",
          marginBottom: 6,
          marginTop: 8,
          textAlign: "center",
        }}
      >
        Patient details
      </Text>



      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#929292",
            textAlign: "center",
          }}
        >
          If the person is the owner of the NIC check the details are correct or not.
        </Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Is this the owner?"
            checked={isOwner}
            onPress={handleCheckboxPress}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>
        <View>
          <Text style={styles.label}>Patient Name</Text>
          <TextInput
            style={styles.inputControl}
            value={patientName}
            onChangeText={setPatientName}
            placeholder="Enter patient name"
          />
        </View>
        <View>
          <Text style={styles.label}>Patient Age</Text>
          <TextInput
            style={styles.inputControl}
            value={age}
            onChangeText={setAge}
            placeholder="Enter patient age"
            keyboardType="phone-pad"
          />
        </View>


      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#0165FC",
          paddingHorizontal: 15,
          paddingVertical: 15,
          marginHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Board")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginVertical: 15,
  },
  checkboxContainer: {
    marginVertical: 15,

  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,

  },
  checkboxText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  dropdown: {
    height: 55,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 20,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "gray",
  },
  input: {
    marginBottom: 16,

  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginVertical: 15,
  },
});



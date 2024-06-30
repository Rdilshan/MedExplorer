import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

export default function Patient() {
  const [patientName, setPatientName] = useState("");
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const navigation = useNavigation();



  // const fetchOwnerDetails = async () => {
  //   try {
  //     const response = await fetch('http://your-api-endpoint/owner-details');
  //     const data = await response.json();
  //     const { name, age, gender } = data;
  //     setPatientName(name);
  //     setAge(age);
  //     setGender(gender);
  //   } catch (error) {
  //     console.error('Failed to fetch owner details:', error);
  //   }
  // };

  // useEffect(() => {
  //   if (isOwner) {
  //     fetchOwnerDetails();
  //   } else {
  //     setPatientName('');
  //     setAge('');
  //     setGender(null);
  //   }
  // }, [isOwner]);


  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#1d1d1d",
          marginBottom: 6,
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
            onPress={() => setIsOwner(!isOwner)}
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

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Gender</Text>
          <RNPickerSelect
         
         onValueChange={(value) => setGender(value)}
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            placeholder={{ label: "Select your gender", value: null }}
            style={pickerSelectStyles}
            value={setGender}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
   
  },
  inputAndroid: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
   
  },
});

import { View, Text, StyleSheet, TextInput , TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export default function Patient() {
  const [patientName, setPatientName] = useState('sumanapala');
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const ageOptions = Array.from({ length: 100 }, (v, k) => k + 1).map(age => ({
    label: age.toString(),
    value: age.toString(),
  }));

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Patient details
      </Text>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 8,
          color: '#868686',
          fontSize: 14,
        }}
      >
        Check the details are correct
      </Text>

      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <View>
          <Text style={styles.label}>Patient Name</Text>
          <TextInput
            style={styles.input}
            value={patientName}
            onChangeText={setPatientName}
            placeholder="Enter patient name"
          />
        </View>
        <View>
          <Text style={styles.label}>Select Gender</Text>
          <Dropdown
            style={styles.dropdown}
            data={genderOptions}
            labelField="label"
            valueField="value"
            placeholder="Select gender"
            value={gender}
            onChange={item => setGender(item.value)}
          />
        </View>
        <View>
          <Text style={styles.label}>Select Age</Text>
          <Dropdown
            style={styles.dropdown}
            data={ageOptions}
            labelField="label"
            valueField="value"
            placeholder="Select age"
            value={age}
            onChange={item => setAge(item.value)}
          />
        </View>
      </View>

      <TouchableOpacity style={{ 
        backgroundColor:'#0165FC',
        paddingHorizontal:15,
        paddingVertical:15,
        marginHorizontal:20,
        borderRadius:8,
        alignItems:'center',
       
       }}>
        <Text style={{ 
            color:'white',
            fontSize:18
         }}>Next</Text>
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
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 55,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  dropdown: {
    height: 55,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
});

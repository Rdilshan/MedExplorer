import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
export default function Success() {
    const navigation = useNavigation();
    const route = useRoute();
    const { patientName } = route.params;

    const handleClick = async (title) => {
        const url = 'https://app.nativenotify.com/api/notification';
    
        const data = {
        // appId: 22433,
        // appToken: "2d6M2ODwoZdhN50rZQHXXh",
        title: "MedExplorer Prescriptions",
        body: "New Prescription recive from medExplorer, Take it and stay safe",
        dateSent: "7-12-2024 3:18AM",
        pushData: { yourProperty: "yourPropertyValue" },
        bigPictureURL: "Big picture URL as a string"
        };
    
        try {
          const response = await axios.post(url, data);
          console.log(response.data);
          navigation.navigate('Dashboard', { screen: 'Prescription', params: { patientName } });
        } catch (error) {
          console.error('Error:', error);
        }
      }
    return (
        <View style={styles.container}>
            <View style={styles.viewStyle}>
                <LottieView
                    style={styles.animation}
                    source={require('../assets/Animation - 1717499982860.json')}
                    autoPlay
                    loop
                />
                <Text style={styles.textStyle}>Success!</Text>
                <Text style={styles.textStyle1}>
                    {'Before sending the prescription, here are \n all the details we attached'}
                </Text>
                <TouchableOpacity style={styles.buttonStyle} 
                onPress={handleClick}
            //    onPress={() => navigation.navigate('Dashboard', { screen: 'Prescription', params: { patientName } })}
               >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewStyle: {
        alignItems: 'center',
    },
    animation: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    textStyle: {
        fontSize: 22,
        color: '#18FF81',
        marginBottom: 8,
    },
    textStyle1: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonStyle: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: '#18FF81',
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

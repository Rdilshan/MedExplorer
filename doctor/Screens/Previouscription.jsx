
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Previouscription() {
    const [patientName, setPatientName] = useState("");
    const [patientPhoneNumber, setPatientPhoneNumber] = useState("");
    const navigation = useNavigation();

    const route = useRoute();
    const { imageUri, age, name, telephone } = route.params;

    useEffect(() => {
        setPatientName(name);
        setPatientPhoneNumber(telephone);

    }, [name, age, telephone]);


    const handleSend = async () => {
        navigation.navigate('Dashboard')
    };


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
                Prescription details
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
                    This is your patient's details and prescription image.
                </Text>

                <View>
                    <Text style={styles.label}>Patient Name</Text>
                    <TextInput
                        style={styles.inputControl}
                        value={patientName}
                        onChangeText={setPatientName}
                        placeholder="Enter patient name"
                        readOnly
                    />
                </View>

                <View>
                    <Text style={styles.label}>Patient Phone Number</Text>
                    <TextInput
                        style={styles.inputControl}
                        value={patientPhoneNumber}
                        onChangeText={setPatientPhoneNumber}
                        placeholder="Enter patient phone number"
                        keyboardType="phone-pad"


                    />
                </View>

                <View>
                    <Text style={styles.label}>Patient Age</Text>
                    <Text style={[styles.inputControl, { fontSize: 15,paddingTop:12}]}>
                        {age}
                    </Text>


                </View>

                <View>
                    <Image source={{ uri: imageUri }} style={styles.previewImage} />
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
                onPress={handleSend}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                    }}
                >
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
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
    previewImage: {
        width: "100%",
        height: 120,
        resizeMode: "contain",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        marginVertical: 4
    },
});

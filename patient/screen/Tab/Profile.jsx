import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';

// Adjust the path according to the actual location
const profileImage = require('../../assets/OIP.jpg');

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <EvilIcons name="arrow-left" size={55} color="white" />
                <Text style={styles.tabHead}>Profile</Text>
                <View style={styles.iconContainer}>
                    <Ionicons name="notifications" size={30} color="white" />
                </View>
            </View>
            <View style={styles.profileImageContainer}>
                <Image
                    source={profileImage}
                    style={styles.profileImage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', // Add a background color if needed
    },
    top: {
        backgroundColor: "#0165FC",
        paddingVertical: 51,
        paddingHorizontal: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    tabHead: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
    iconContainer: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 45,
        padding: 5,
        marginTop: 8,
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 56, // Adjust this value as needed
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#0165FC',
    },
});

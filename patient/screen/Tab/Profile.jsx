import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


// Adjust the path according to the actual location
const profileImage = require('../../assets/OIP.jpg');

export default function Profile({ navigation }) {

    // const navigation =useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

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
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image
                        source={profileImage}
                        style={styles.profileImage}
                    />
                    <View style={styles.editIconContainer}>
                        <MaterialIcons name="mode-edit-outline" size={16} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: '600', marginTop: 7 }}>Roy Kanel</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Ionicons name="close" size={30} color="black" />
                            </TouchableOpacity>
                            <Image
                                source={profileImage}
                                style={styles.modalImage}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
             <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} 
        onPress={() => { navigation.navigate('Profile');
          }}>
          <Ionicons name="person-outline" size={28} color="#0165FC" />
          <Text style={styles.menuText}>Your Profile</Text>
          <MaterialIcons style={styles.arrowIcon1} name="keyboard-arrow-right" size={28} color="#0165FC" />
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="heart-outline" size={28} color="#0165FC" />
          <Text style={styles.menuText}>Favourite</Text>
          <MaterialIcons style={styles.arrowIcon2} name="keyboard-arrow-right" size={28} color="#0165FC" />
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={28} color="#0165FC" />
          <Text style={styles.menuText}>Setting</Text>
          <MaterialIcons style={styles.arrowIcon3}  name="keyboard-arrow-right" size={28} color="#0165FC" />
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={28} color="#0165FC" />
          <Text style={styles.menuText}>Help center</Text>
          <MaterialIcons style={styles.arrowIcon4} name="keyboard-arrow-right" size={28} color="#0165FC" />
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out-outline" size={28} color="#0165FC" />
          <Text style={styles.menuText}>Logout</Text>
          <MaterialIcons style={styles.arrowIcon5} name="keyboard-arrow-right" size={28} color="#0165FC" />
        </TouchableOpacity>
      </View>
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
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#0165FC',
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#0165FC',
        borderRadius: 20,
        padding: 8,
        borderWidth: 2,
        borderColor: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    menuContainer: {
            marginTop: 20,
            paddingHorizontal: 33,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
        },
        menuText: {
            fontSize: 19,
            marginLeft: 19,
              fontWeight: "600",
              
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            width: 300,
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        closeButton: {
            position: 'absolute',
            top: 10,
            right: 10,
        },
        modalImage: {
            width: 250,
            height: 250,
            borderRadius: 125,
        },
        separator: {
            height: 1,
            backgroundColor: '#E0E0E0',
            marginVertical: 6,
        },
         arrowIcon1: {
             marginLeft: 110, 
         },
         arrowIcon2: {
             marginLeft: 127,
         },
          arrowIcon3: {
              marginLeft: 143,
          },
          arrowIcon4: {
              marginLeft: 104,
          },
           arrowIcon5: {
               marginLeft: 136,
           },
});

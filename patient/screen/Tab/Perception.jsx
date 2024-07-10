import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import usePatientData from "../store/usePatientData";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/patientapi'; 
import DetailedView from './DetailedView' 

function Perception() {
  const navigation = useNavigation();
  const patientData = usePatientData();
  const [prescriptions, setPrescriptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [viewingCard, setViewingCard] = useState(null);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const handleQRCodePress = (value) => {
    setQrCodeValue(value);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleViewPress = (index) => {
    setViewingCard(index);
    setSelectedPrescription(prescriptions[index]);
  
  };

  const handleMoreReadablePress = () => {
    setViewingCard(null);
   
  };

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const response = await api.get('/prescription/getpatient');
          const prescriptionsData = response.data;
          console.log('Prescriptions data:', prescriptionsData);
          // Fetch doctor details for each prescription
          const prescriptionsWithDoctorDetails = await Promise.all(
            prescriptionsData.map(async (prescription) => {
              const doctorResponse = await api.get(`/doctor/${prescription.doctorid}`);
              // console.log(`Doctor data for prescription ${prescription._id}:`, doctorResponse.data);
              return {
                ...prescription,
                doctorName: doctorResponse.data.doctor.name,
                doctorimg:doctorResponse.data.doctor.ProfileIMG,
                doctorEmail:doctorResponse.data.doctor.email,
                image: prescription.image
              };
            })
           
          );
         
          setPrescriptions(prescriptionsWithDoctorDetails);
        } catch (error) {
          if (error.response.data.error === 'Invalid authorization') {
            await AsyncStorage.removeItem('token');
            navigation.navigate("SignIn");
          }
        }
      };

      fetchUserData();
    }, [navigation])
  );

  if (!patientData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <TouchableOpacity>
              <Image
                source={{ uri: patientData.ProfileIMG }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Prescription</Text>
          </View>
          <TouchableOpacity style={[styles.iconButton, styles.notificationButton]}>
            <Icon name="notifications" type="material" color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {prescriptions.length ? (
          prescriptions.map((prescription, index) => (
            <TouchableOpacity key={index} onPress={() => handleViewPress(index)}>
              <View style={styles.cardOne}>
                <View style={styles.cardOneHead}>
                  <Image
                   source={{ uri: prescription.doctorimg }}
                  //  source={{ uri: prescription.image }}
                    style={styles.cardOneImage}
                  />
                  <View>
                    <Text style={styles.cardOneName}>Dr .{prescription.doctorName}</Text>
                    <Text>{prescription.doctorEmail}</Text>
                
                  </View>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.buttonQr} onPress={() => handleQRCodePress(`QR Code for ${prescription.doctorName}`)}>
                    <Text style={styles.buttonText}>QR Code</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonView} onPress={() => handleViewPress(index)}>
                    <Text style={styles.buttonText}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.placeholderText}>
            No prescriptions available
          </Text>
        )}
      </ScrollView>
      {viewingCard !== null && (
        <Modal
          visible={true}
          // transparent={true}
          animationType="slide"
          onRequestClose={handleMoreReadablePress} // Close modal on request
        >
          <TouchableWithoutFeedback onPress={handleMoreReadablePress}>
            <View style={styles.modalOverlay}>
              <DetailedView
                onClose={handleMoreReadablePress}
                prescription={selectedPrescription}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}

<Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <QRCode value={qrCodeValue} size={wp(80)} />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  header: {
    backgroundColor: "#0165FC",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingHorizontal: 20,
    paddingVertical:30
  
  },
  profileImage: {
   
    width: wp("15%"),
    height: wp("15%"),
    borderRadius: wp("10%"),
    borderWidth: 2, 
    padding: 4, 
    borderRadius: 50,
    borderColor:"white" 
  },
  headerContent: {
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: hp(4),
    justifyContent: "space-between",
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
  },
  iconButton: {
    padding: wp(3),
    borderWidth: 2, 
    padding: 4, 
    borderRadius: 50,
    borderColor:"white" 
  },
  notificationButton: {
    borderWidth: 2, 
    padding: 4, 
    borderRadius: 50,
    borderColor:"white" 
  },
  scrollContainer: {
    marginHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  cardOne: {
    padding: wp(3),
    borderRadius: wp(3),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp(0.5) },
    shadowOpacity: 0.8,
    shadowRadius: hp(0.5),
    elevation: 1,
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: 'gray', 
    
  },
  cardOneHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  cardOneImage: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    marginRight: wp(3),
  },
  cardOneName: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  cardOneId: {
    fontSize: wp(3.5),
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonQr: {
    flex: 1,
    marginHorizontal: wp(1),
    paddingVertical: hp(1),
    backgroundColor: 'red',
    borderRadius: wp(2),
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    marginHorizontal: wp(1),
    paddingVertical: hp(1),
    backgroundColor: 'green',
    borderRadius: wp(2),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: wp(90),
    padding: wp(4),
    backgroundColor: '#FFF',
    borderRadius: wp(3),
    alignItems: 'center',
  },
  closeButton: {
    marginTop: hp(2),
    paddingVertical: hp(2),
    paddingHorizontal: wp(3),
    backgroundColor: '#007BFF',
    borderRadius: wp(2),
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  placeholderText: {
    textAlign: 'center',
    marginTop: hp(20),
    fontSize: wp(5),
    color: '#888',
  },
});

export default Perception;
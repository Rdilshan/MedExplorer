import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import DetailedView from './DetailedView';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Perception() {
  const [modalVisible, setModalVisible] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [viewingCard, setViewingCard] = useState(null);

  const handleQRCodePress = (value) => {
    setQrCodeValue(value);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleViewPress = (index) => {
    setViewingCard(index);
  };

  const handleMoreReadablePress = () => {
    setViewingCard(null);
  };

  // Sample data for cards
  const cardData = [
    { name: 'Dr. Munasigha', specialty: 'Cardiologist' },
    { name: 'Dr. John Doe', specialty: 'Neurologist' },
    { name: 'Dr. Jane Smith', specialty: 'Pediatrician' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="arrow-back" type="material" color="#FFF" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Perception</Text>
          </View>
          <TouchableOpacity style={[styles.iconButton, styles.notificationButton]}>
            <Icon name="notifications" type="material" color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      {viewingCard !== null ? (
        <DetailedView onClose={handleMoreReadablePress} />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cardData.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => handleViewPress(index)}>
              <View style={styles.cardOne}>
                <View style={styles.cardOneHead}>
                  <Image
                    source={require('../image/image.jpg')}
                    style={styles.cardOneImage}
                  />
                  <View>
                    <Text style={styles.cardOneName}>{card.name}</Text>
                    <Text style={styles.cardOneSpecialty}>{card.specialty}</Text>
                  </View>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => handleQRCodePress(`QR Code for ${card.name}`)}>
                    <Text style={styles.buttonText}>QR Code</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => handleViewPress(index)}>
                    <Text style={styles.buttonText}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    height: hp(15),
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
    paddingHorizontal: wp(5),
    marginTop: wp(6),
  },
  headerContent: {
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
    fontSize: wp(8),
    color: "#FFF",
    fontWeight: "bold",
  },
  iconButton: {
    padding: wp(3),
  },
  notificationButton: {
    borderWidth: wp(0.5),
    borderColor: '#FFF',
    borderRadius: wp(3),
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
    borderWidth: wp(0.5),
    borderColor: '#007BFF', 
  },
  cardOneHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  cardOneImage: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6), // Circular image
    marginRight: wp(3),
  },
  cardOneName: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  cardOneSpecialty: {
    fontSize: wp(3.5),
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: wp(1),
    paddingVertical: hp(1),
    backgroundColor: '#007BFF',
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
});

export default Perception;

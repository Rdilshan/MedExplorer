import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import DetailedView from './DetailedView';

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
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications" type="material" color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      {viewingCard !== null ? (
        <DetailedView onClose={handleMoreReadablePress} />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={styles.cardOne}>
              <View style={styles.cardOneHead}>
                <Image
                  source={require('../image/image.jpg')}
                  style={styles.cardOneImage}
                />
                <View>
                  <Text style={styles.cardOneName}>Dr. Munasigha</Text>
                  <Text style={styles.cardOneSpecialty}>Cardiologist</Text>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleQRCodePress(`QR Code for Card ${index + 1}`)}>
                  <Text style={styles.buttonText}>QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleViewPress(index)}>
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
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
              <QRCode value={qrCodeValue} size={200} />
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
    height: "15%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 45,
    justifyContent: "space-between",
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },
  iconButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  cardOne: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 20,
  },
  cardOneHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardOneImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image
    marginRight: 10,
  },
  cardOneName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardOneSpecialty: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Perception;

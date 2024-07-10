import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function SearchDruges() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <EvilIcons style={styles.backIcon} name="arrow-left" size={48} color="white"
           onPress={() => navigation.navigate("MainContainer", { screen: "Perception" })}

        />
        <Image
          source={require('../assets/3687af9d-7e14-43ee-999b-7c9f3a341b9d-fotor-bg-remover-20240702112145.png')}
          style={styles.topImage}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bottom}>
          {Array(7).fill().map((_, index) => (
            <View style={styles.itemContainer} key={index}>
              <Text style={styles.text1}>Vitamin D plus Capsule</Text>
              <Text style={styles.text2}>$20.00</Text>
              <Text style={styles.text3}>A health supplement in the form of multivitamin with a special focus on Vitamin D. Vitamin D is used for preventing and treating Rickets.</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 30,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: '#000',
    height: 337,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    zIndex: -2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backIcon: {
    marginBottom: 175,
    marginLeft: -25,
  },
  topImage: {
    width: 250,
    height: 240,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40,
    marginLeft: 70,
  },

  bottom: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    // padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  itemContainer: {
    padding: 5,
    marginTop: 5,
  },
  text1: {
    fontWeight: "600",
    fontSize: 20,
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
  },
  text3: {
    marginTop: 5,
  },
});

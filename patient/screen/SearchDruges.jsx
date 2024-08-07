import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function SearchDruges() {
  const navigation = useNavigation();
  const route = useRoute();
  const { predictions } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <EvilIcons
          style={styles.backIcon}
          name="arrow-left"
          size={48}
          color="white"
          onPress={() =>
            navigation.navigate("MainContainer", { screen: "Perception" })
          }
        />
        <Image
          source={require("../assets/Prescription.png")}
          style={styles.topImage}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          Drugs in the Prescription
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 15,
            textAlign: "center",
            fontWeight: 300,
            paddingBottom: 10,
          }}
        >
          You can get more details about each drugs when click it !
        </Text>
        <View style={styles.bottom}>
        {predictions && predictions.map((prediction, index) => (
            <TouchableOpacity
              style={styles.itemContainer}
              key={index}
              onPress={() => navigation.navigate("drugItem", { drugName: prediction })}
            >
              <Text style={styles.text1}>
                {index + 1}) {prediction}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 30,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
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
    resizeMode: "contain",
    position: "absolute",
    bottom: 40,
    marginLeft: 70,
  },

  bottom: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  itemContainer: {
    padding: 5,
    marginTop: 5,
  },
  text1: {
    fontWeight: "400",
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

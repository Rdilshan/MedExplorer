import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DrugItem() {
  const navigation = useNavigation();
  const route = useRoute();
  const { drug } = route.params;

  return (
    <View style={styles.container}>
   
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.drugName}>{drug.name}</Text>
        <Image source={{ uri: drug.img }} style={styles.drugImage} />
        <Text style={styles.description}>{drug.description}</Text>
        <Text style={styles.price}>{drug.price}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  backIcon: {
    marginBottom: 175,
    marginLeft: -25,
  },
 
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  drugName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  drugImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    // marginVertical: 20,
    marginTop:20
  },
  description: {
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "300",
    paddingBottom: 10,
  },
  price: {
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

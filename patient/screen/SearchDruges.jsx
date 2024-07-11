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
import { useNavigation } from "@react-navigation/native";

const drugs = [
  {
    id: 1,
    name: "Vitamin D plus Capsule",
    description:
      "A health supplement in the form of multivitamin with a special focus on Vitamin D. Vitamin D is used for preventing and treating Rickets.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$20.00",
    img:"https://m.media-amazon.com/images/I/51WxtS4hobL._AC_SL1001_.jpg",
  },
  {
    id: 2,
    name: "Aspirin 500mg Tablet",
    description: "Used to reduce pain, fever, or inflammation.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$15.00",
    img:"https://5.imimg.com/data5/SELLER/Default/2024/4/410701169/GE/KM/RG/219185642/aspirin-43-500x500.jpg",
  },
  {
    id: 3,
    name: "Cough Syrup",
    description: "Provides relief from cough and congestion.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$8.00",
    img:"https://www.kapruka.com/shops/specialGifts/productImages/1679050977604_1_m.jpg",
  },
  {
    id: 4,
    name: "Antibiotic Cream",
    description: "Used for treating minor wounds and skin infections.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$12.00",
    img:"https://i.webareacontrol.com/fullimage/1000-X-1000/2/t/2832020446bacitracin-antibiotic-ointment-P.png",
  },
  {
    id: 5,
    name: "Pain Relief Gel",
    description: "Used to relieve pain in muscles and joints.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$10.00",
    img:"https://i5.walmartimages.com/seo/Voltaren-Topical-Arthritis-Medicine-Gel-Pain-Reliever-for-Arthritis-1-7-Oz_1f2269b1-367b-4875-9082-776c7b440cdb_1.8665567178ef8e228db983afaa07c76a.jpeg",
  },
  {
    id: 6,
    name: "Multivitamin Tablets",
    description: "A comprehensive daily multivitamin for overall health.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$25.00",
    img:"https://i.ebayimg.com/images/g/Q2kAAOSwOhFjZMYV/s-l1200.webp",
  },
  {
    id: 7,
    name: "Calcium Supplement",
    description: "Supports bone health and prevents calcium deficiency.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$18.00",
    img:"https://m.media-amazon.com/images/I/61FTQ6w9C2L.jpg",
  },
  {
    id: 8,
    name: "Omega 3 Capsules",
    description: "Supports heart health and brain function.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$22.00",
    img:"https://m.media-amazon.com/images/I/61lSWm-RUlL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Probiotic Supplement",
    description: "Supports digestive health and boosts immunity.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$19.00",
    img:"https://i5.walmartimages.com/seo/Spring-Valley-Women-s-Cranberry-Probiotic-Supplement-Vegetarian-Gummies-Raspberry-Lemon-60-Count_c9716fb4-8d19-471d-86c2-fca98da250fc.363d6636b0d4438430996d866ab9d966.jpeg",
  },
  {
    id: 10,
    name: "Iron Tablets",
    description: "Prevents and treats iron deficiency anemia.s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: "$14.00",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9ZFXZacm6bKapo1knBKFoNymaFKVTj7gIw&s",
  },
];
export default function SearchDruges() {
  const navigation = useNavigation();
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
          {drugs.map((drug, index) => (
            <TouchableOpacity
              style={styles.itemContainer}
              key={drug.id}
              onPress={() => navigation.navigate("drugItem", { drug })}
            >
              <Text style={styles.text1}>
                {index + 1} ) {drug.name}
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

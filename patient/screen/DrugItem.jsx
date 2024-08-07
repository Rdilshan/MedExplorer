

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DrugItem() {
  const route = useRoute();
  const { drugName } = route.params;
  const [drug, setDrug] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      try {
        const response = await fetch(`https://med-explorer-backend.vercel.app/drug/name/${drugName}`);
        if (!response.ok) {
          throw new Error('Drug not found');
        }
        const data = await response.json();
        setDrug(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrugDetails();
  }, [drugName]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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
    marginTop: 20,
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


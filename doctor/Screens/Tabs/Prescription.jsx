import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useCallback   } from "react";
import { Ionicons } from "@expo/vector-icons";
import useDoctorData from "../store/useDoctorData";
import { useRoute } from "@react-navigation/native";
import api from '../api/doctorapi';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';



export default function Prescription({ navigation }) {
  const route = useRoute();
  const doctorData = useDoctorData();
  const [prescriptions, setPrescriptions] = useState([]);

  useFocusEffect(
    useCallback(() => {

    const fetchUserData = async () => {
      try {
        const response = await api.get('/prescription/getdoctor');
        setPrescriptions(response.data);
      } catch (error) {
        if (error.response.data.error === 'Invalid authorization') {
          await AsyncStorage.removeItem('token');
          navigation.navigate("SignIn");
        }
      }

    };

    fetchUserData();
  }, [navigation]))


  if (!doctorData) {
    return <Text>Loading...</Text>;
  }

  


  return (
    <View>
      <View style={styles.top}>
        <Image
          source={{ uri: doctorData.ProfileIMG }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            borderWidth: 2,
            padding: 4,
            borderRadius: 50,
            borderColor: "white",
          }}
        />
        <Text style={styles.tabHead}>Prescription</Text>
        <Ionicons
          name="notifications"
          size={30}
          color="white"
          style={{
            borderWidth: 2,
            padding: 4,
            borderRadius: 50,
            borderColor: "white",
          }}
        />
      </View>
      <View>
        <View style={styles.body}>
          <Text style={{ fontWeight: "bold" }}>Today</Text>
          {prescriptions.length ? (
            prescriptions.map(item => (
              <View style={styles.card}>
                <View
                  style={{
                    backgroundColor: "#7DFFB9",
                    padding: 8,
                    borderRadius: 30,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://w7.pngwing.com/pngs/113/707/png-transparent-patient-cartoon-drawing-surgery-time-character-cartoon-character-child-face-thumbnail.png",
                    }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                </View>

                <View>
                  <View style={styles.mzg}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
                
                <Text style={{ fontWeight: 500 }}> {moment(item.date).fromNow()}</Text>
              </View>
            ))

          ) : (
            <Text style={styles.placeholderText}>
              No patient information available
            </Text>
          )}

        </View>


        <TouchableOpacity
          style={{
            backgroundColor: "#0165FC",
            padding: 15,
            marginHorizontal: 25,
            marginBottom: 15,
            borderRadius: 8,
          }}
          onPress={() => navigation.navigate("Pnumber")}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Write here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 50,
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 80,
  },
  tabHead: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    padding: 4,
    borderBottomColor: "#bfbfbf",
    backgroundColor: 'white'
  },
  mzg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // gap:65
  },
});

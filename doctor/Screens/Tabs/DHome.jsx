import React, { useState,useCallback } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import api from '../api/doctorapi';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';




export default function HeaderComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const navigation = useNavigation();

  const [profilimg,setprofileimg] = useState("https://storage.googleapis.com/medexplorer-10c83.appspot.com/photo_pp867y7mh.jpg?GoogleAccessId=firebase-adminsdk-s1sao%40medexplorer-10c83.iam.gserviceaccount.com&Expires=1741478400&Signature=OVCz7haRCuJqHL6YLQxV0ZR3%2BOPCzleeaMIHwHqHMh6pVz0RqV9ESwkQZezCxO2CAdD4SZVGodJgR83I8Ra9pjEBQMHzAnHj6ukuV%2BhJ8VbxrMuUQg1MGxS%2FlnWuo7YHvxohguhVmnHrZsX2FVOoabp5I5fa4c%2Fzmy5w4tIySjEm3m1X5m2w0olvnJln9g91Jr3DGdOpe22W1NLQlbm%2FerCfAyZsn8aDDkGfME2%2Bkb5H%2BmUdZKWBgJ%2BQjpGXlyoQ5pAfreC0HGiybKf5%2FamFQ6nkQjJ2VtQ3mTacOzdzMsxc1jY91VE3qVgVKPTEAgJfTdSFoZaxkJkX0ThyGuwTHw%3D%3D")
  const [name,setname] = useState("loading..")


  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api.get('/doctor/profile');

  //       console.log(response.data)

  //       setprofileimg(response.data.doctor.ProfileIMG)
  //       setname(response.data.doctor.name)

  //     } catch (error) {

  //       if (error.response.data.error === 'Invalid authorization') {
          
  //         await AsyncStorage.removeItem('token');
  //         navigation.navigate("SignIn");

  //       }

  //     }
  //   };

  //   fetchUserData();
  // }, []);


  useFocusEffect(
    useCallback(() => {

    const fetchUserData = async () => {
      try {
        const response = await api.get('/doctor/profile');
              console.log(response.data)
              setprofileimg(response.data.doctor.ProfileIMG)
              setname(response.data.doctor.name)
      } catch (error) {
        if (error.response.data.error === 'Invalid authorization') {
          await AsyncStorage.removeItem('token');
          navigation.navigate("SignIn");
        }
      }

    };

    fetchUserData();
  }, [navigation]))


  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const changeYear = (num) => {
    setSelectedYear(selectedYear + num);
  };

  const changeMonth = (monthChange) => {
    const currentDate = new Date(selectedYear, new Date().getMonth(), 1);
    currentDate.setMonth(currentDate.getMonth() + monthChange);
    setSelectedYear(currentDate.getFullYear());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <View style={styles.row}>
          <Image
            source={{ uri: profilimg }} 
            style={styles.icon}
          />
          <Ionicons name="notifications" size={30} color="white" style={{ 
         borderWidth: 2, 
         padding: 4, 
         borderRadius: 50,
         borderColor:"white" 
        
           }} />
        </View>
        <View style={styles.row1}>
          <Text style={styles.greeting}>Hello, {name} </Text>
          <MaterialIcons name="waving-hand" size={30} color="#FFD43B" style={styles.waveIcon} />
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors here"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
      <View style={styles.gdtext}>
        <Text style={styles.goodMorning}>Good morning,</Text>
        <Text style={styles.keep}>Keep it going!</Text>
      </View>
      <View style={styles.calendarContainer}>
       < Calendar
       style = {
         styles.calendar
       }
       hideExtraDays = {
         true
       } // Only show days for the current month
       theme = {
         {
           backgroundColor: '#0165FC',
           calendarBackground: '#0165FC',
           textSectionTitleColor: '#000000',
           selectedDayBackgroundColor: '#FFFFFF',
           selectedDayTextColor: '#0165FC',
           todayTextColor: '#FFFFFF',
           dayTextColor: '#000000',
           textDisabledColor: '#d9e1e8',
           monthTextColor: '#FFFFFF',
           indicatorColor: '#FFFFFF',
           textDayFontFamily: 'monospace',
           textMonthFontFamily: 'monospace',
           textDayHeaderFontFamily: 'monospace',
           textDayFontWeight: '300',
           textMonthFontWeight: 'bold',
           textDayHeaderFontWeight: '300',
           textDayFontSize: 16,
           textMonthFontSize: 16,
           textDayHeaderFontSize: 16,
         }
       }
       onDayPress = {
         (day) => setSelectedDate(day.dateString)
       }
       />

      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  top: {
    backgroundColor: "#0165FC",
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2, 
    padding: 4, 
    borderRadius: 50,
    borderColor:"white" 
  },
  greeting: {
    fontSize: 19,
    color: 'white',
    marginTop: 26,
    marginRight: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  waveIcon: {
    marginLeft: 10,
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    width: '90%',
    backgroundColor: '#0165FC',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
  gdtext: {
    marginTop: 35,
    marginRight: 140,
  },
  goodMorning: {
    fontSize: 15,
    
  },
  keep: {
    fontSize: 20,
    marginTop: 3,
  },
  calendarContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#0165FC',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  calendar: {
    borderRadius: 10,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  navButton1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#765afc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  navButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#57c09f',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  navButton3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcf68',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  navButton4: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff484c',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  navButtonText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    marginHorizontal: 5,
  },
});

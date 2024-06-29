import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import api from '../api/doctorapi';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function HeaderComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const navigation = useNavigation();

  const [profilimg,setprofileimg] = useState("https://storage.googleapis.com/medexplorer-10c83.appspot.com/photo_pp867y7mh.jpg?GoogleAccessId=firebase-adminsdk-s1sao%40medexplorer-10c83.iam.gserviceaccount.com&Expires=1741478400&Signature=OVCz7haRCuJqHL6YLQxV0ZR3%2BOPCzleeaMIHwHqHMh6pVz0RqV9ESwkQZezCxO2CAdD4SZVGodJgR83I8Ra9pjEBQMHzAnHj6ukuV%2BhJ8VbxrMuUQg1MGxS%2FlnWuo7YHvxohguhVmnHrZsX2FVOoabp5I5fa4c%2Fzmy5w4tIySjEm3m1X5m2w0olvnJln9g91Jr3DGdOpe22W1NLQlbm%2FerCfAyZsn8aDDkGfME2%2Bkb5H%2BmUdZKWBgJ%2BQjpGXlyoQ5pAfreC0HGiybKf5%2FamFQ6nkQjJ2VtQ3mTacOzdzMsxc1jY91VE3qVgVKPTEAgJfTdSFoZaxkJkX0ThyGuwTHw%3D%3D")
  const [name,setname] = useState("loading..")


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/doctor/profile');

        // console.log(response.data)

        setprofileimg(response.data.doctor.ProfileIMG)
        setname(response.data.doctor.name)
        const doctorData = response.data.doctor;
        await AsyncStorage.setItem('doctorData', JSON.stringify(doctorData));

      } catch (error) {

        if (error.response.data.error === 'Invalid authorization') {
          
          await AsyncStorage.removeItem('token');
          navigation.navigate("SignIn");

        }

      }
    };

    fetchUserData();
  }, []);



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
          <Ionicons name="notifications" size={30} color="white" />
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
      <Calendar
        style={{ marginTop: 20 }}
        current={`${selectedYear}-01-01`}
        minDate={'2022-01-01'}
        maxDate={'2030-12-31'}
        onDayPress={onDayPress}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        showWeekNumbers={true}
        onPressArrowLeft={subtractMonth => changeYear(-1)}
        onPressArrowRight={addMonth => changeYear(1)}
        theme={{
          calendarBackground: '#f8f8f8',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#0165FC',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#0165FC',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          monthTextColor: '#ffffff',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
          'stylesheet.calendar.header': {
            header: {
              backgroundColor: '#0165FC',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
            },
            monthText: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
            dayHeader: {
              marginTop: 2,
              marginBottom: 7,
              width: 32,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black', // Set the day names color to black
            },
          },
          'stylesheet.calendar.day.basic': {
            text: {
              marginTop: 2,
              fontSize: 16,
              color: 'black', // Set all day text color to black
              textAlign: 'center',
              fontWeight: 'bold',
            },
            selected: {
              backgroundColor: '#0165FC',
              borderRadius: 16,
            },
            selectedText: {
              color: '#ffffff',
            },
            today: {
              backgroundColor: '#0165FC',
              borderRadius: 16,
            },
            todayText: {
              color: '#ffffff',
            },
            weekendText: {
              color: '#0165FC',
            },
          },
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#0165FC'
          }
        }}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => {/* Handle button 1 press */ }} style={[styles.navButton1, styles.button]}>
          <Ionicons name="ios-tooth" size={24} color="white" />
          {/* Button 1 content */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle button 2 press */ }} style={[styles.navButton2, styles.button]}>
          <Ionicons name="ios-settings" size={24} color="white" />
          {/* Button 2 content */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle button 3 press */ }} style={[styles.navButton3, styles.button]}>
          <Ionicons name="ios-settings" size={24} color="white" />
          {/* Button 3 content */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle button 4 press */ }} style={[styles.navButton4, styles.button]}>
          <Ionicons name="ios-chatbox" size={24} color="white" />
          {/* Button 4 content */}
        </TouchableOpacity>
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
    paddingVertical: 35, // Decreased padding
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
    alignItems: 'center', // Center contents horizontally
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
  },
  greeting: {
    fontSize: 19,
    color: 'white',
    marginTop: 26, // Space between the row and the greeting text
    marginRight: 10,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, // Add some space between the row and the search bar
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
    borderColor: '#FFFFFF', // Set border color to white
    borderWidth: 1, // Set border width
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white', // Optional: Make the input text white
  },
  gdtext: {
    marginTop: 35,
    marginRight: 140
  },
  goodMorning: {
    fontSize: 15,

  },
  keep: {
    fontSize: 20,
    marginTop: 3,
  },
  calendarContainer: {
    marginTop: 40,
    marginBottom: 20, // Add bottom margin here
    width: '100%', // Make sure the calendar takes the full width
    alignItems: 'center', // Center the calendar horizontally
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
    height: 80, // Adjust height as needed
    marginHorizontal: 5, // Add margin between buttons
  }

});

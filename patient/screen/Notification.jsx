import { View, Text, StyleSheet, TouchableOpacity ,Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export default function Prescription({ navigation }) {
  return (
    <View>
      <View style={styles.top}>
      <EvilIcons name="arrow-left" size={55} color="white" />
        {/* <Image source={require('../assets/icon.png')} style={{ 
          width:50,
          height:50,
          borderRadius:30
         }}/> */}
        <Text style={styles.tabHead}>Notification</Text>
        <View style={styles.iconContainer}>
        <Ionicons name="notifications" size={30} color="white" />
        </View>
      </View>
      <View>
        <View style={styles.body}>
          <View style={styles.container}>
         <Text style={[styles.text,{}]}>Today</Text>
          <Text style={[styles.text, { marginLeft: 135,color:"#0165FC" }]}>Mark as all read</Text>
          </View>
          

          <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
           
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
           
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16, }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
            
          </View>
          

          <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16, }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16,  }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.body}>
        <View style={styles.container}>
      <Text>Last Week</Text>
      <Text style={[styles.text, { marginLeft: 100, color: "#0165FC" }]}>Mark as all read</Text>
    </View>
          

          <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16, }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16,  }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
          </View>

           <View style={styles.card}>
            <View style={{ backgroundColor:'#7DFFB9', padding:15, borderRadius:30 }}>
            <FontAwesome6 name="hospital-user" size={24} color="#00873D" />
            </View>
           
            <View>
              <View style={styles.mzg}>
                <Text style={{ fontSize:16,  }}> Dr. Munasingha</Text>
                <Text> 1hr</Text>
              </View>
            </View>
          </View>

         
        </View>

       
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
   
    elevation: 80,
    
  
  },
  tabHead: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  
   
  },
  body:{
   paddingHorizontal:40,
   paddingVertical:20

  },
  card:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginTop:10,
    borderBottomWidth:1,
    paddingBottom:3,
    borderBottomColor:'#868686'
    
  },
  mzg:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:65
   
  },
  iconContainer:{
     borderWidth: 2, // Adjust the border width as needed
       borderColor: 'white',
       borderRadius: 45, // Adjust the border radius to fit the icon shape
       padding: 5,
       marginTop:8,
  },
  container:{
      flexDirection: 'row', // This ensures the texts are arranged in a column
        marginRight:11,
        padding: 18,
  },
  

});

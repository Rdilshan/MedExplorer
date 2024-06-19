import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




export default function Profile({navigation}) {

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/doctor.jpg")}
          style={{ width: 70, height: 70, borderRadius: 40,marginTop:30}}
        />
        <View style={{ marginTop:30}}>
        <Text style={{ color: "white", fontSize: 20 ,fontWeight:'bold' }}>Profile Setting</Text>
        <Text style={{ color: "white", fontSize: 10 }}>@joinsmile</Text>
        </View>
      </View>

      <View style={styles.set}>
        <Text style={styles.sethead}>Account</Text>
      </View>
      <TouchableOpacity style={styles.setitem}   onPress={()=>navigation.navigate('Profile')}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome name="user-circle-o" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Account Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <AntDesign name="eye" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Privacy Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.set}>
        <Text style={styles.sethead}>Security</Text>
      </View>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome5 name="lock" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Security Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
         <MaterialIcons name="notifications-active" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Notification Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
        <MaterialIcons name="data-saver-off" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Data usage Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.set}>
        <Text style={styles.sethead}>Theme</Text>
      </View>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
        <FontAwesome5 name="font" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Display Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setitem}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
       <MaterialIcons name="language" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Language Setting</Text>
        </View>

        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setitem} onPress={()=>navigation.navigate('SignIn')}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
     <MaterialCommunityIcons name="logout" size={30} color="black" />
          <Text style={{ fontSize: 16 }}>Logout</Text>
        </View>
        
        <MaterialIcons name="navigate-next" size={30} color="black" />
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    paddingTop:5,
    gap:40,
    paddingHorizontal: 30,
    paddingVertical: 25,
    backgroundColor:'#0165FC',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    elevation:0.7,
    marginBottom:10
  },
  set: {
   marginHorizontal:10,
    height: 40,
    paddingLeft: 20,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomColor:"gray",
    borderBottomWidth: 1,
  },
  sethead: {
    color: "black",
    fontStyle: "italic",
  },
  setitem: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

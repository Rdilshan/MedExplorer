import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';






export default function Profile() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 70, height: 70, marginTop: 30, borderRadius: 40 }}
        />
        <Text style={{ color: "white", fontSize: 20 }}>Jon Smile</Text>
        <Text style={{ color: "white", fontSize: 10 }}>@joinsmile</Text>
      </View>

      <View style={styles.set}>
        <Text style={styles.sethead}>Account</Text>
      </View>
      <View style={styles.setitem}>
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
      </View>

      <View style={styles.setitem}>
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
      </View>

      <View style={styles.set}>
        <Text style={styles.sethead}>Security</Text>
      </View>

      <View style={styles.setitem}>
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
      </View>

      <View style={styles.setitem}>
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
      </View>

      <View style={styles.setitem}>
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
      </View>

      <View style={styles.set}>
        <Text style={styles.sethead}>Theme</Text>
      </View>

      <View style={styles.setitem}>
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
      </View>

      <View style={styles.setitem}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor:'#0165FC',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    elevation:0.7,
    marginBottom:10
  },
  set: {
    backgroundColor: "#0165FC",
    height: 40,
    paddingLeft: 20,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sethead: {
    color: "white",
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

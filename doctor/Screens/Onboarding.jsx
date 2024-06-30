import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Done = ({ ...props }) => (
  <TouchableOpacity style={style.nextButton} {...props}>
    <Ionicons name="arrow-forward" size={24} color="white" />
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={style.nextButton} {...props}>
    <Ionicons name="arrow-forward" size={24} color="white" />
  </TouchableOpacity>
);

const dot = ({selected})=>{
    let backgroundColor;
    backgroundColor = selected ? '#0165FC':"#4D93FF"
    return(
      <View
      style={{ width:8,height:8,marginHorizontal:3,backgroundColor,borderRadius:30 }}
      />
    )
}
const Skip = ({ ...props }) => (
  <TouchableOpacity style={style.skipButton} {...props}>
    <Text style={style.skipButtonText}>Skip</Text>
  </TouchableOpacity>
);

export default function Onboardings() {
  const navigation = useNavigation();
  return (
    <Onboarding
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DotComponent={dot}
      onSkip={() => navigation.navigate("Register")}
      onDone={() => navigation.navigate("Register")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard1.png")}
              style={style.ImageContainer}
            />
          ),
          title:   <Text style={style.title}>
          "Write <Text style={style.highlight}>Prescription </Text>Digitally"
        </Text>,
          subtitle: 'Easily create and manage prescriptions with our digital tools.',
        },

        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard2.png")}
              style={style.ImageContainer}
            />
          ),
          title: 
          <Text style={style.title}>
         "Build <Text style={style.highlight}> Communication"</Text>
        </Text>,
          
          subtitle: 'Connect and communicate with patients and other healthcare providers seamlessly.',
        },
      ]}
    />
  );
}

const style = StyleSheet.create({
  ImageContainer: {
    width: 300,
    height: 300,
  },
  nextButton: {
    backgroundColor: "#0165FC",
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#0165FC',
  },
  skipButton: {
    marginHorizontal: 30,
  },
  skipButtonText: {
    fontSize: 17,
    fontWeight:'bold',
    color: '#0165FC',
  },
});

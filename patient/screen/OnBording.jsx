// import { View, Image, StyleSheet,Text } from 'react-native';
// import React, { useState } from 'react';
// import Onboarding from 'react-native-onboarding-swiper';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function Onboardings() {
//   const navigation = useNavigation();
//   const [currentPage, setCurrentPage] = useState(0);

//   const NextButton = ({ ...props }) => {
//     let iconName = 'arrow-forward';
//     if (currentPage === 1 || currentPage === 2) {
//       iconName = 'double-arrow';
//     }

//     return (
//       <View style={styles.nextButtonContainer}>
//         <MaterialIcons name={iconName} size={24} color="#fff" {...props} />
//       </View>
//     );
//   };

//   const DoneButton = ({ ...props }) => (
//     <View style={styles.doneButtonContainer}>
//       <MaterialIcons name="check" size={24} color="#fff" {...props} />
//     </View>
//   );

//   const SkipButton = ({ ...props }) => (
//     <View style={styles.skipButtonContainer}>
//       <MaterialIcons name="arrow-back" size={24} color="#fff" {...props} />
//     </View>
//   );

//   const handlePageChange = (index) => {
//     setCurrentPage(index);
//   };

//   return (
//     <Onboarding
//       onDone={() => navigation.navigate('Register')}
      // showSkip // Show the skip button
      // SkipButtonComponent={SkipButton} // Custom skip button
      // NextButtonComponent={NextButton} // Custom next button
      // DoneButtonComponent={DoneButton} // Custom done button
//       bottomBarHighlight={false}
//       pages={[
//         {
//           backgroundColor: '#fff',
//           image: <Image source={require('../assets/onboard1.png')} style={styles.ImageContainer} />,
//           title: (
//           <View style={styles.titleContainer}>
//       <Text style={[styles.title,]}>Read Any </Text>
//       <Text style={[styles.title, { color: '#0165FC' }]}>Details</Text>
//     </View>
// )
// ,
//           subtitle: 'Done with React Native Onboarding Swiper',
//           titleStyle: styles.titleStyle,
//         },
//         {
//           backgroundColor: '#fff',
//           image: <Image source={require('../assets/friendly-pharmacist-wearing-white-coat-glasses-stands-pharmacy-surrounded-by-shelves-medication_14117-37937-removebg-preview.png')} style={styles.ImageContainer} />,
//           title: (
//           <View style={styles.titleContainer}>
//       <Text style={[styles.title,]}>Discover Drug </Text>
//       <Text style={[styles.title, { color: '#0165FC' }]}>Details</Text>
//     </View>
// )
// ,
//           subtitle: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
//         },
//         {
//           backgroundColor: '#fff',
//           image: <Image source={require('../assets/onboard2.png')} style={styles.ImageContainer} />,
//            title: (
//           <View style={styles.titleContainer}>
//       <Text style={[styles.title,]}>Build </Text>
//       <Text style={[styles.title, { color: '#0165FC' }]}>Communication</Text>
//     </View>
// )
// ,
//           subtitle: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
//         },
        
//       ]}
//       onPageChange={(index) => handlePageChange(index)}
//       DotComponent={({ selected }) => (
//         <View
//           style={{
//             backgroundColor: selected ? '#0165FC' : '#c4c4c4',
//             width: 7.5,
//             height: 7.5,
//             borderRadius: 3,
//             marginHorizontal: 3,
            
//           }}
//         />
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   ImageContainer: {
//     width: 300,
//     height: 300,
//   },
//   nextButtonContainer: {
//     backgroundColor: '#0165FC',
//     borderRadius: 25,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 22,
//   },
//   doneButtonContainer: {
//     backgroundColor: '#0165FC',
//     borderRadius: 25,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 22,
//   },
//   skipButtonContainer: {
//     backgroundColor: '#0165FC',
//     borderRadius: 25,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 22,
//   },
//    titleContainer: {
//        flexDirection: 'row', 
//      },
//      title: {
//        // Add other styles for the title here
//        fontSize: 24,
//        fontWeight: '600',
//      },
// });
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

export default function OnBording() {
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
          "Read Any <Text style={style.highlight}>Details</Text> Digitally"
        </Text>,
          subtitle: 'Access comprehensive prescription information with ease and precision.',
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
         "Discover Drug  <Text style={style.highlight}>Details"</Text>
        </Text>,
          
          subtitle: 'Get in-depth insights into medication, ensuring safe and effective use.',
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/onboard1.png")}
              style={style.ImageContainer}
            />
          ),
          title: 
          <Text style={style.title}>
         "Build<Text style={style.highlight}> Communication"</Text>
        </Text>,
          
          subtitle: 'Enhance connectivity with patients and healthcare providers through seamless communication tools.',
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



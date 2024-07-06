import { View, Image, StyleSheet,Text } from 'react-native';
import React, { useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Onboardings() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);

  const NextButton = ({ ...props }) => {
    let iconName = 'arrow-forward';
    if (currentPage === 1 || currentPage === 2) {
      iconName = 'double-arrow';
    }

    return (
      <View style={styles.nextButtonContainer}>
        <MaterialIcons name={iconName} size={24} color="#fff" {...props} />
      </View>
    );
  };

  const DoneButton = ({ ...props }) => (
    <View style={styles.doneButtonContainer}>
      <MaterialIcons name="check" size={24} color="#fff" {...props} />
    </View>
  );

  const SkipButton = ({ ...props }) => (
    <View style={styles.skipButtonContainer}>
      <MaterialIcons name="arrow-back" size={24} color="#fff" {...props} />
    </View>
  );

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <Onboarding
      onDone={() => navigation.navigate('Register')}
      showSkip // Show the skip button
      SkipButtonComponent={SkipButton} // Custom skip button
      NextButtonComponent={NextButton} // Custom next button
      DoneButtonComponent={DoneButton} // Custom done button
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboard1.png')} style={styles.ImageContainer} />,
          title: (
          <View style={styles.titleContainer}>
      <Text style={[styles.title,]}>Read Any </Text>
      <Text style={[styles.title, { color: '#0165FC' }]}>Details</Text>
    </View>
)
,
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyle: styles.titleStyle,
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/friendly-pharmacist-wearing-white-coat-glasses-stands-pharmacy-surrounded-by-shelves-medication_14117-37937-removebg-preview.png')} style={styles.ImageContainer} />,
          title: (
          <View style={styles.titleContainer}>
      <Text style={[styles.title,]}>Discover Drug </Text>
      <Text style={[styles.title, { color: '#0165FC' }]}>Details</Text>
    </View>
)
,
          subtitle: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboard2.png')} style={styles.ImageContainer} />,
           title: (
          <View style={styles.titleContainer}>
      <Text style={[styles.title,]}>Build </Text>
      <Text style={[styles.title, { color: '#0165FC' }]}>Communication</Text>
    </View>
)
,
          subtitle: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        },
        
      ]}
      onPageChange={(index) => handlePageChange(index)}
      DotComponent={({ selected }) => (
        <View
          style={{
            backgroundColor: selected ? '#0165FC' : '#c4c4c4',
            width: 7.5,
            height: 7.5,
            borderRadius: 3,
            marginHorizontal: 3,
            
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    width: 300,
    height: 300,
  },
  nextButtonContainer: {
    backgroundColor: '#0165FC',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  doneButtonContainer: {
    backgroundColor: '#0165FC',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  skipButtonContainer: {
    backgroundColor: '#0165FC',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 22,
  },
   titleContainer: {
       flexDirection: 'row', 
     },
     title: {
       // Add other styles for the title here
       fontSize: 24,
       fontWeight: '600',
     },
});

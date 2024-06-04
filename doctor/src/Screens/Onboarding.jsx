import { View, Text ,Image, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';


export default function Onboardings() {
  return (
    
  
    <Onboarding
   
    
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboard1.png')} style={style.ImageContainer}/>,
        title: 'ite Prescription Digitaly',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
     
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboard2.png')} style={style.ImageContainer}/>,
        title: 'Build Communication',
        subtitle: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
      },
     
    ]}
  />
 
  )
}

const style = StyleSheet.create({
    ImageContainer:{
        width:300,
        height:300,
  
    }
})
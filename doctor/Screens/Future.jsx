import { View, Text, Image ,StyleSheet } from 'react-native'
import React from 'react'

export default function Future() {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/loading.png')}
        style={styles.image}
      />
      <Text style={{ fontWeight:400 ,fontSize:20 ,color:"white"}}>Future Works...</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#0165FC"
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: 30,
    },
    image: {
      height: 200,
      width: 200, 
    },
  });
  
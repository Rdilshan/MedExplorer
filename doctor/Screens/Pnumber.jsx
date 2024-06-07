

import { View, Text , StyleSheet ,TextInput } from 'react-native'
import React , {useState}  from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Pnumber({navigation}) {
    const [mobileNumber, setMobileNumber] = useState('');
   
  return (

    <View style={styles.container}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="#3A3A3A" 
        onPress={()=>navigation.navigate('Dashboard')}
        />
        <View style={styles.bodyhead}>
        <Text style={{ 
            fontSize:25,
            textAlign:'center',
            fontWeight:'bold'
         }}>Prescription</Text>
        <Text style={{ 
            textAlign:'center',
            fontSize:14,
            color:'#868686'
         }}>Before writing the prescription enter the patient mobile number</Text>
       
        
      </View>

      <View style={{ marginTop:40 }}>
      <Text style={styles.label}>Mobile number of patient</Text>
      <TextInput
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
      />
    </View>

    <TouchableOpacity style={styles.nextBtn} 
      onPress={()=>navigation.navigate('Patient')}
    >
        <Text style={{ color:'white' , fontSize:16 }}>Next</Text>
    </TouchableOpacity>
      </View>
      
   
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        paddingVertical:50,
        paddingHorizontal:30
    },
    bodyhead:{
        display:'flex',
        alignItems:'center',
        gap:30
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
      },
      input: {
        height: 55,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      },
      nextBtn:{
        backgroundColor:'#0165FC',
        paddingHorizontal:40,
        paddingVertical:15,
        marginTop:50,
        alignItems:'center',
        borderRadius:8
      }
   

})

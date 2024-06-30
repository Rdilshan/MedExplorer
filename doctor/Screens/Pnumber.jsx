
import { View, Text , StyleSheet ,TextInput } from 'react-native'
import React , {useState}  from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Pnumber({navigation}) {
    const [nicNumber, setnicNumber] = useState('');
   
  return (

    <View style={styles.container}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="gray" 
        onPress={()=>navigation.navigate('Dashboard')}
        />
        <View style={styles.bodyhead}>
        <Text style={{ 
         fontSize: 32,
         fontWeight: 'bold',
         color: '#1d1d1d',
         marginBottom: 6,
         textAlign: 'center',
         marginTop:20
         }}>Prescription</Text>
        <Text style={{ 
           fontSize: 15,
           fontWeight: '500',
           color: '#929292',
           textAlign: 'center',
         }}>Before writing the prescription enter the patient NIC number</Text>
       
        
      </View>

      <View style={{ marginTop:40 }}>
      <Text style={styles.label}>NIC number of patient</Text>
      <TextInput
       
        value={nicNumber}
        onChangeText={setnicNumber}
        placeholderTextColor="#6b7280"
        placeholder="Enter NIC number"
      
        style={styles.inputControl}
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
        paddingHorizontal:20
    },
    bodyhead:{
        display:'flex',
        alignItems:'center',
        gap:30,
     
    },
    label: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8,
      },
      input: {
        
        height: 44,
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
      },
      nextBtn:{
        backgroundColor:'#0165FC',
        paddingHorizontal:40,
        paddingVertical:15,
        marginTop:50,
        alignItems:'center',
        borderRadius:8
      },
      inputControl: {
        height: 44,
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth:1,
        borderColor:"gray"
      },
   

})

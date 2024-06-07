import { SafeAreaView , StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function EnterCode() {
    const[code, setcode] = useState('123')

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f4wff3'}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerAction} onPress={()=>{}}>
                    <FeatherIcon name="arrow-left" size={24} color="#000000"/>
                </TouchableOpacity>
                <Text style={styles.title}>New Password</Text>
                <Text style={styles.subtitle}>Your new password must be different with previously used password </Text>
                <Text></Text>
            </View>
        </View>
        <View style={styles.form}>
            <View style={styles.formInput}>
                <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                autoFocus
                caretHidden
                keyboardType='number-pad'
                returnKeyType='done'
                onChangeText={value => setcode(value.slice(0, 4))}
                style={styles.formInputControl}
                value={code}/>
                <View style={styles.formInputOverflow}>
                    {Array.from({length: 4}).map((_, index) => {
                        return (
                         <Text key={index} style={styles.formInputChar}>
                            {code[index] || '-'}
                             </Text>   
                        )
                    })}
                </View>
                <View style={styles.formAction}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{}}>
                        <Text style={styles.btnText}>Next Progress</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={()=>{}} >
                   <Text style={styles.formFooter}>
                   Didn't get the email <Text style={styles.formLink}>Resend code</Text></Text> 
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        flex: 1,
        
    },
    title: {
        alignSelf:'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#181818',
        marginBottom: 20,
        
    },
    subtitle: {
        fontSize: 15,
        lineHeight: 20,
        color:'#889797',
        fontWeight: '500',
    },
    header: {
        paddingHorizontal: 16,
        marginBottom: 5
    },
    headerAction: {
        width: 40,
        height: 60,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        marginBottom: 5
    },
    form: {
        flex: 1,
        paddingHorizontal: 15,
    },
    formInput: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 12
    },
    formInputOverflow: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16
    },
    formInputControl: {
        zIndex: 2,
        height:60,
        color: 'transparent',
        paddingHorizontal:10
    },
    formInputChar: {
        flex: 1,
        lineHeight: 60,
        fontSize: 34,
        textAlign: 'center',
        fontWeight: '600'
    },
    formINputCharEmpty: {
        color: '#bbb9bc',
        fontWeight: '400'
    },
    formAction: {
        marginVertical: 15
    },
    formFooter: {
        marginTop: 20,
        marginBottom: 'auto',
        paddingHorizontal: 24,
        fontSize: 15,
        lineHeight: 20,
        color: '#9fa5af',
        textAlign: 'center',
        fontWeight:'400'
    },
    formLink: {
        textAlign: 'right',
        fontWeight: '600',
        color: '#0165FC',
        textDecorationLine: 'underline',
        textDecorationColor: '#0165FC',
        textDecorationStyle: 'solid'
    },

    btn: {
        flexDirection: 'row',
        backgroundColor: '#0165FC',
        borderColor: '#0165FC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderWidth:1
    },
    btnText: {
        fontSize: 17,
        lineHeight: 22,
        color: '#fff',
        fontWeight: 'bold'
    }


})
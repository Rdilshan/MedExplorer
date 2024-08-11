import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation,useRoute } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import axios from 'axios';

export default function EnterCode() {
  const route = useRoute();
  const { email } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");

  const navigation = useNavigation();


  async function onsubmit(){

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://med-explorer-backend.vercel.app/patient/checkotp",
        { email: email,
          pin:code
         }
      );
      if (response.status === 200) {
        console.log(response.data);
        const data = response.data.data;
        console.log(data)
        setIsLoading(false);

        Toast.show({
          type: 'success',
          text1: 'Pin is matched.',
          text2: 'Move to work.',
          visibilityTime: 2000,
        });

        navigation.navigate('EnterNewPassword', {
          patientid: data
        });
      }

    } catch (error) {

      console.log("400 error:", error.response.data);
      Toast.show({
        type: 'error',
        text1: error.response.data.error,
        text2: 'Please try again.',
        visibilityTime: 2000,
      });
      setIsLoading(false);

    }
    
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            onPress={() => navigation.navigate("NewPasswordone")}
          >
            <FeatherIcon name="arrow-left" size={24} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.title}>New Password</Text>
          <Text style={styles.subtitle}>
            Your new password must be different from the previously used
            password.
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            caretHidden
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(value) => setCode(value.slice(0, 4))}
            style={styles.formInputControl}
            value={code}
          />
          <View style={styles.formInputOverflow}>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Text key={index} style={styles.formInputChar}>
                  {code[index] || "-"}
                </Text>
              );
            })}
          </View>

        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={onsubmit} disabled={isLoading}>
            <View style={styles.btn}>
              {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Next Progress</Text>}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
          navigation.navigate("NewPasswordone");
        }}>
          <Text style={styles.formFooter}>
            Didn't get the email?{" "}
            <Text style={styles.formLink}>Resend code</Text>
          </Text>
        </TouchableOpacity>



      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,

    flex: 1,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,

    color: "#181818",
    marginBottom: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: "#889797",
    fontWeight: "500",
    textAlign: "center",
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  headerAction: {
    width: 40,
    height: 40,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 5,
  },
  form: {
    flex: 1,
    paddingHorizontal: 15,
  },
  formInputOverflow: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  formInputControl: {
    zIndex: 2,
    height: 60,
    color: "transparent",
    paddingHorizontal: 10,
  },
  formInputChar: {
    flex: 1,
    lineHeight: 60,
    fontSize: 34,
    textAlign: "center",
    fontWeight: "600",
  },
  formInputCharEmpty: {
    color: "#bbb9bc",
    fontWeight: "400",
  },
  formAction: {
    marginVertical: 15,
  },
  formFooter: {
    marginTop: 20,
    marginBottom: "auto",
    paddingHorizontal: 24,
    fontSize: 15,
    lineHeight: 20,
    color: "#9fa5af",
    textAlign: "center",
    fontWeight: "400",
  },
  formLink: {
    textAlign: "right",
    fontWeight: "600",
    color: "#0165FC",
    textDecorationLine: "underline",
    textDecorationColor: "#0165FC",
    textDecorationStyle: "solid",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "#0165FC",
    borderColor: "#0165FC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    color: "#fff",
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,  } from "react-native";
import { signInWithEmailAndPassword,fetchSignInMethodsForEmail,createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../config/firebase";
import colors from "../colors";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigation();

 

  const onHandleLogin = () => {
    if ((email !== "" && password !== "") && email.split('@')[1]=='sairamtap.edu.in') {

          signInWithEmailAndPassword(auth, email, password)
          .then(() => navi.navigate('Busroute'))
          .catch((err) => Alert.alert('Login Failed', `Kindly Check your Mail id and Password`, [
            { text: 'OK' },
          ]));
    }
    else{
      Alert.alert('Login Failed', `Kindly Check your Mail id and Password`, [
        { text: 'OK' },
      ])
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BUS APP </Text>
      <View style={styles.subcontainer}>
      <Text style={{fontSize:25,fontWeight:"bold",color:colors.primary,textAlign:"center",paddingTop:10}}>Admin Login</Text>
      <View style={styles.logincontainer}> 
      <TextInput
                style={styles.loginbox}
                placeholder=" Enter your admin Id"
                autoCapitalize="none"
                autoCorrect={false}
                
                value={email}
                onChangeText={(text) => setEmail(text)}
        />

      <TextInput
                style={styles.loginbox}
                placeholder=" Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                value={password}
              
                onChangeText={(text) => setPassword(text)}
       />
      </View>
      

      <View style={{justifyContent:"center",alignItems:"center"}}  >
        <TouchableOpacity style={{height:60,width:150,backgroundColor:colors.primary,borderRadius:6,justifyContent:"center",alignItems:"center",margin:20}} onPress={onHandleLogin}>
            <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent:"center", 
    alignItems:"center"
  },
  subcontainer:{
    width:320,
    height: 400,
    backgroundColor:"white",
    borderRadius:15, 
    padding:10
  }, 
  heading:{
    fontSize:40, 
    fontWeight:"bold",
    color:"white", 
    fontStyle:"italic", 
    bottom:20
  },
  logincontainer:{

    height:200, 
    backgroundColor:"white", 
    justifyContent:"space-evenly",  
    alignItems:"center"
  },

  loginbox:{
    borderWidth:1,
    borderColor:colors.primary, 
    width:"90%", 
    height:50,  
    borderRadius:5,
    paddingHorizontal:10
    
  }, 
  
});
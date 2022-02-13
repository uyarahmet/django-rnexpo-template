
import React, {useState} from "react";

import styles from "../components/styles";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

import axios from 'axios'



const appId = "1047121222092614";

export default function SignupScreen() {


  const [dialog, setDialog] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLoginPress() {


    credentials = {
      'username' :username,
      'email' : email,
      'password' : password,
    }

    axios.post('http://localhost:8000/users/', credentials)



  }


  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Featspeak</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChange={evt => setUsername(evt.target.value)}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChange={evt => setPassword(evt.target.value)} secureTextEntry={true} />
            <TextInput placeholder="Retry Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChange={evt => setPassword(evt.target.value)} secureTextEntry={true}/>
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Signup" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

import React, { useState } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, 
        TouchableOpacity, Alert, Modal} from 'react-native';
import { loginStyles } from '../styles/global';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import RegisterForm from '../components/registerForm';
import Home from './home';
import db from '../db';


export default function login(){
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const registerUser = () => {
        setIsModalVisible(false);
    }

    // press login button
    const loginAttempt = (email, pwd) =>{

        db.auth().signInWithEmailAndPassword(email, pwd).then(credentials => {
            console.log("LOG: " + credentials.user.email + " Logged in");
            setIsLoginSuccess(true);
          }).catch(error =>  {
            // Handle Errors here.
            let errorMessage = error.message;
            console.log('LOG: ' + errorMessage);
            // tell user to try again
            Alert.alert('Login Incorrect', 'The account details entered were not recognised. ', [
                {text: 'Retry', onPress: () => console.log('LOG: login alert closed') }
              ]);
        } )
    }

    if(!isLoginSuccess){
        return(
            <KeyboardAvoidingView
            style={loginStyles.container}
            behavior="padding"
            >
            <Modal visible={isModalVisible} animationType={'slide'}>
              <MaterialIcons 
                name={'close'}
                size={24}
                style={loginStyles.modalToggle}
                onPress={() => setIsModalVisible(false)}
              />
              <RegisterForm registerUser={registerUser} /> 
            </Modal>
            <View style={loginStyles.logoContainer}>
                <FontAwesome name='send' size={80} color={'white'}/>
                <Text style={loginStyles.logoText}>Mac Messenger</Text>
            </View>

            {/* Email Textbox */}
            <TextInput 
            style={loginStyles.input}
            placeholder='email'
            onChangeText={setEmailInput} 
            value={emailInput}
            keyboardType='email-address'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}>
            </TextInput>

            {/* Password Textbox */}
            <TextInput 
            style={loginStyles.input}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            onChangeText={setPasswordInput}
            value={passwordInput}>
            </TextInput>

            {/* Login button */}
            <TouchableOpacity onPress={()=>  loginAttempt(emailInput, passwordInput)}>
                <View style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>Login</Text>
                </View>
            </TouchableOpacity>

            {/* Register button */}
            <TouchableOpacity style={loginStyles.registerButton} onPress={()=>  setIsModalVisible(true)}>
              <Text style={loginStyles.registerText}>Register Here</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        )
    }
    else{
        return(
            // render the home.js Screen
            < Home />
        )
    }
}



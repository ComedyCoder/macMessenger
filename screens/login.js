import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from './home';
import db from '../db';


export default function login(){
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    [emailInput, setEmailInput] = useState('');
    [passwordInput, setPasswordInput] = useState('');

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
            style={styles.container}
            behavior="padding"
            >
            <View style={styles.logoContainer}>
                <FontAwesome name='send' size={80} color={'white'}/>
                <Text style={styles.logoText}>Mac Messenger</Text>
            </View>

            <TextInput 
            style={styles.input}
            placeholder='email'
            onChangeText={setEmailInput} 
            value={emailInput}
            keyboardType='email-address'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}>
            </TextInput>

            <TextInput 
            style={styles.input}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            onChangeText={setPasswordInput}
            value={passwordInput}>
            </TextInput>

            <TouchableOpacity onPress={()=>  loginAttempt(emailInput, passwordInput)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'coral',
        padding: 20
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        color: 'white'
    },
    logoText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20
    },
    input:{
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 30,
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    button:{
        height: 32,
        marginRight: 50,
        marginLeft: 50,
        marginBottom:20,
        marginTop: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 3,
       
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    
    }
})



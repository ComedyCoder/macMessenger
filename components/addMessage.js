import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  // changes textBox's value
  const changeHandler = (val) => {
    setText(val);
  };

  // when use press send, run submitHandler in home.js 
  // then empty the textBox
  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={0}
    behavior="height"
    >
  {/* /  <View style={styles.container}> */}
      <TextInput 
        style={styles.input} 
        placeholder='Type a message'
        onChangeText={changeHandler} 
        value={text}
        multiline
      />
      <TouchableOpacity style={styles.addButtonContainer} onPress={pressHandler} >
        <FontAwesome name='send' size={30} color={'coral'}/>
      </TouchableOpacity>
      </KeyboardAvoidingView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 4,
    alignItems: 'center',
  
  },
  input: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  addButtonContainer:{
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    padding: 6,
    marginLeft: 4,
    marginRight: 2,

  }
  
});
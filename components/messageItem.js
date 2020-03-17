import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import db from '../db';

export default function TodoItem({ deleteHandler, item, userEmail }) {
  // The user that is signed in will see their messages as white
  // They will also have the option to delete their messages
  // Messages from other users will be coral

  let userStyle = {backgroundColor: '', textColor: '', displayDelete: ''};

    if(userEmail === item.email){
      userStyle = {backgroundColor: 'white', textColor: 'black', displayDelete: 'flex'};
    } else{
      userStyle = {backgroundColor: 'coral', textColor: 'white', displayDelete: 'none'};
    }


    return (
      <TouchableOpacity>
        <View style={[styles.item, {backgroundColor : userStyle.backgroundColor}]}>
          <Text style={[styles.itemText, {color : userStyle.textColor}]}> {item.text} </Text>
          <Entypo name='circle-with-cross'  size={22}  color='#333' 
          style={[{display : userStyle.displayDelete}]}  onPress={() => deleteHandler(item.docId)}/>
         </View>
         </TouchableOpacity>
    );
    
}
  

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemText: {
    display: 'flex',
    marginLeft: 10,
  }
});
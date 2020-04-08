import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import db from '../db';

export default function TodoItem({ deleteHandler, item, userEmail }) {
  // The user that is signed in will see their messages as coral
  // They will also have the option to delete their messages
  // Messages from other users will be white

  let userStyle = {backgroundColor: '', textColor: '', displayDelete: ''};

    if(userEmail === item.email){
      userStyle = {backgroundColor: 'coral', textColor: 'white',  displayDelete: 'flex', 
                   alignSelf: 'flex-end', marginLeft: 23,  marginRight: 0};
    } else{
      userStyle = {backgroundColor: 'white', textColor: 'black', displayDelete: 'none', 
                   alignSelf: 'flex-start', marginLeft: 0,  marginRight: 23};
    }


    return (
        <View style={[styles.item, {backgroundColor : userStyle.backgroundColor}, 
                     {alignSelf : userStyle.alignSelf}, {marginLeft: userStyle.marginLeft}, 
                     {marginRight: userStyle.marginRight}]}>

          <Text style={[styles.itemText, {color : userStyle.textColor}]}> {item.text} </Text>
            <Entypo name='circle-with-cross'  size={22}  color='#333' 
            style={[{display : userStyle.displayDelete}]}  onPress={() => deleteHandler(item.docId)}/>
         </View>
        
    );
    
}
  

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginTop: 12,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
   
  },
});
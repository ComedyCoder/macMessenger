{/* App Icon from - <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z" fill="#ff7f50"></path><path d="M121.65417,53.75l-13.42317,68.53483c0,0 -0.57692,3.13183 -4.46125,3.13183c-2.064,0 -3.12825,-0.98183 -3.12825,-0.98183l-29.07517,-24.12658l-14.22583,-7.17025l-18.25708,-4.85542c0,0 -3.25008,-0.93883 -3.25008,-3.62633c0,-2.23958 3.34325,-3.30742 3.34325,-3.30742l76.38233,-30.34367c-0.00358,-0.00358 2.33275,-0.84208 4.03483,-0.8385c1.04633,0 2.23958,0.44792 2.23958,1.79167c0,0.89583 -0.17917,1.79167 -0.17917,1.79167z" fill="#ffffff"></path><path d="M82.41667,109.30958l-12.2765,12.09017c0,0 -0.53392,0.41208 -1.247,0.43c-0.24725,0.00717 -0.51242,-0.03225 -0.78475,-0.15408l3.45433,-21.37458z" fill="#b0bec5"></path><path d="M107.13092,65.20233c-0.60558,-0.78833 -1.72358,-0.93167 -2.51192,-0.33325l-47.28567,28.29758c0,0 7.5465,21.113 8.69675,24.768c1.15383,3.65858 2.07833,3.74458 2.07833,3.74458l3.45433,-21.37458l35.23133,-32.594c0.78833,-0.59842 0.93525,-1.72 0.33683,-2.50833z" fill="#cfd8dc"></path></g></g></svg> */}

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Header from '../components/header';
import MessageItem from '../components/messageItem';
import AddMessage from '../components/addMessage';
import db from '../db';

export default function home() {
  
    // using React Hooks
    const [ loading, setLoading ] = useState(true);
    const [ messages, setMessages ] = useState([]);
    const userEmail = db.auth().currentUser.email;

    // run on load and when changes happen in the firebase database
    useEffect(() => {
      const unsubscribe = db;
       db.firestore().collection("Items").orderBy("key", "desc").onSnapshot(Snapshot => {
            const newList = [];
            Snapshot.forEach(doc => {
              newList.push({
                text: doc.data().text,
                key: doc.data().key,
                docId: doc.id,
                email: doc.data().email
              });
            });
            setMessages(newList);
            if (loading) {
              setLoading(false);
            }
      }) 
      return () => {
        unsubscribe()
      }
    }, [db]);

  
 // Ignore these Warnings, problem with Expo that has not been patched.  
YellowBox.ignoreWarnings(['VirtualizedList']);
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1 ) {
    _console.warn(message);
  }
};

// when a user deletes one of their messages
 const deleteHandler = async (docId) => {
  await db.firestore().collection("Items").doc(docId).delete().then(function() {
    console.log("LOG: Document: "+ docId + " successfully deleted!");
  })
 
};
 
  // when a user sends one of message
  const  submitHandler = async (abc) => {
   // gets the current date and time for the new message's Unique key
    let moment = require('moment');
    let newKey = (moment().format());

    if(text.length > 1){
        const message = {
          text: abc,
          key: newKey,
          email: userEmail
      }
      await db.firestore().collection('Items').add(message).then(() => {
        ("LOG: message sent.");
      });
        return;
        
    } else {
      Alert.alert('OOPS', 'messages must be over 1 character long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
   
   };



  if(loading){
    return null
  } else {
  
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container} >
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              inverted
              data={messages}
              renderItem={({ item }) => (
                <MessageItem item={item} deleteHandler={deleteHandler} userEmail={userEmail}/>
              )}
            />
          </View>
          <AddMessage submitHandler={submitHandler} />
        </View>
      </View>
      </KeyboardAvoidingView>
     </TouchableWithoutFeedback>
  );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginBottom: 6
  },
});

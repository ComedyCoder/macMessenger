import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text,TouchableOpacity, FlatList} from 'react-native';
import Card from '../components/card';
import {dbAuth, dbFireStore} from '../db';

export default function ChatList({ navigation }) {
    
  const currentUser = dbAuth.currentUser;
  const [users, setUsers] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const userName = navigation.getParam('userName');
  

     useEffect(() => {
      let moment = require('moment');
      let newKey;
      let number = 0;
      let newList = []
      const db = dbFireStore.collection("users")
      let unsubscribe = db.onSnapshot((Snapshot) => {
        Snapshot.forEach(doc => {
          // if the ID does not match the user currently logged in, then add it to the list.
          if(doc.id != currentUser.uid){
            newKey = (moment().format());
            number++;
            newList.push({
              name: doc.data().displayName,
              bio: doc.data().bio,
                // make key type string by concatenating 'm'.
              key: number + newKey,
              userId: doc.id
            });
          }
      })

      setUsers(newList)
      setLoading(false)
    });

    return () => unsubscribe()
  }, [])

    const  submitHandler = async (name) => {
      let docData = {
          members: [userName, name],
        }
      let newDocId = ("124" + userName + "X" + name + "AbC");
        dbFireStore.collection("chats/").doc(newDocId).set(docData).then(() => {
          navigation.navigate('Home',  {
            title: name,
            userEmail: currentUser.email,
            chatDocId: newDocId,  
            })
        });
    }



if(loading){
  return null
} 
else {

  return(
    <View style={styles.container}>
        <FlatList data={users} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => submitHandler(item.name)}> 
          <Card>
            <Text>{ item.name }</Text>
            <Text>  </Text>
            <Text style={styles.bioText}>Bio: { item.bio }</Text>
          </Card>
          </TouchableOpacity>
        )}/>
    </View>
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  bioText: {
    color: 'grey',
    flex: 1,
    fontSize: 14,
  },
});

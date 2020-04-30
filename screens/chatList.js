import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text,TouchableOpacity, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../components/card';
import {dbAuth, dbFireStore} from '../db';

export default function ChatList({ navigation }) {
    
  const currentUser = dbAuth.currentUser;
    const [chats, setChats] = useState([]);
      const [ loading, setLoading ] = useState(true);
   
     useEffect(() => {
      let moment = require('moment');
      let newKey;
      let number = 0;
      let nameList = []
      let tempChatList = []
      const db = dbFireStore.collection("chats")
      let unsubscribe = db.where("members", "array-contains", currentUser.displayName).onSnapshot((Snapshot) => {
        Snapshot.forEach(doc => {
          doc.data().members.forEach(x => {
            newKey = (moment().format());
            number++;
            if(x != currentUser.displayName && nameList.includes(x) == false){
              nameList.push(x);
              tempChatList.push({
                name: x,
                key: number + newKey,
                chatDocId: doc.id
              });
            }
          })
        })
        setChats(tempChatList)
        setLoading(false)
      });

      return () => unsubscribe()
    }, [chats])



if(loading){
  return null
} 
else {

  return(
    <View style={styles.container}>
        {/* <Header /> */}
        <FlatList data={chats} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Home',  {
                                            title: item.name,
                                            userEmail: currentUser.email,
                                            chatDocId: item.chatDocId,
                                            chatList: chats
                                          }
          )}> 
          <Card>
            <Text>{ item.name }</Text>
          </Card>
          </TouchableOpacity>
        )}/>

      <TouchableOpacity>
        <MaterialCommunityIcons 
          name={'pencil-circle'}
          size={60}
          style={styles.button}
          onPress={() => navigation.navigate('userList', {
                          userName: currentUser.displayName,
          })}
        />
      </TouchableOpacity>
    </View>
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  button:{
    marginBottom: 5,
    marginTop: 3,
    marginRight: 3,
    padding: 3,
    color: 'coral',
    alignSelf: "flex-end",
    },
});

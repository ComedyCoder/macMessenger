import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default function Card(props) {
  return(
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require('../assets/profile.jpg')} style={styles.image}/>
        { props.children }
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,

  },
  cardContent: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginVertical: 20,
  },
  image: {
    width: 26,
    height: 26,
    marginRight: 7,
  }
});
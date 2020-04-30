import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from '../components/header';
import Home from '../screens/home';
import ChatList from '../screens/chatList';
import userList from '../screens/userList';

const screens = {
  ChatList: {
    screen: ChatList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Mac Messenger' navigation={navigation} />
      }
    },
  },
  userList: {
    screen: userList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='all users' navigation={navigation} />
      }
    },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title={navigation.getParam('title')} navigation={navigation} />
      }
    },
}
}

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { height: 80  },
    headerTitleAlign: "center",

  }
});


export default createAppContainer(HomeStack);

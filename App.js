import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import PlayPage from './screens/PlayPage';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  PlayPage: {
    screen: PlayPage
  }
}, {
  initialRootName: 'Home'
});

export default RootStack;
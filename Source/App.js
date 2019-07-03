import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
// These imports are needed, one for every screen in our app
// TODO: Figure out way to do something like:
// import * from './components/pages/'
import { HomeScreen } from './components/pages/home';
import { HomePageScreen } from './components/pages/homepage';
import { AdvisingScreen} from './components/pages/advising';
import { JBEScreen} from './components/pages/jbe';
import { CS_BSScreen} from './components/pages/cs_bs';

// Every screen we have in our program must be in this stack,
// following this format
const FunStack = createStackNavigator({
  Home: {screen: HomeScreen},
  HomePage: {screen: HomePageScreen},
  Advising: {screen: AdvisingScreen},
  JBE: {screen: JBEScreen},
  CS_BS: {screen: CS_BSScreen},
});

const App = createAppContainer(FunStack);

export default App;
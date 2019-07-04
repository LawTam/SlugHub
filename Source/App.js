import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
// These imports are needed, one for every screen in our app
// TODO: Figure out way to do something like:
// import * from './components/pages/'
import { WelcomeScreen } from './components/pages/welcome';
import { HomePageScreen } from './components/pages/homepage';
import { AdvisingScreen} from './components/pages/advising';
import { JBE_MajorsScreen} from './components/pages/jbe_majors';
import { JBE_MinorsScreen} from './components/pages/jbe_minors'
import { CS_BSScreen} from './components/pages/cs_bs';
import { AM_MinorScreen} from './components/pages/am_minor';
import { BE_ElecScreen} from './components/pages/be_bioelectronics';
import { BE_ATScreen} from './components/pages/be_at_motor';
import { BE_BiomoleScreen} from './components/pages/biomole';

// Every screen we have in our program must be in this stack,
// following this format
const FunStack = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  HomePage: {screen: HomePageScreen},
  Advising: {screen: AdvisingScreen},
  JBE_Majors: {screen: JBE_MajorsScreen},
  JBE_Minors: {screen: JBE_MinorsScreen},
  CS_BS: {screen: CS_BSScreen},
  AM_Minor: {screen: AM_MinorScreen},
  BE_Elec: {screen: BE_ElecScreen},
  BE_AT: {screen: BE_ATScreen},
  BE_Biomole: {screen: BE_BiomoleScreen},
});

const App = createAppContainer(FunStack);

export default App;
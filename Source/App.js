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
import { CS_BSScreen} from './components/pages/cs_bs';
import { JBE_MinorsScreen} from './components/pages/jbe_minors'
import { CE_MajorScreen}   from  './components/pages/ce_major'
import { BioInfo_MajorScreen}   from  './components/pages/bioinfo_major'
import { CS_MinorScreen } from './components/pages/cs_minor';
import { CE_MinorScreen } from './components/pages/ce_minor';
import { BioInfo_MinorScreen } from './components/pages/bioinfo_minor';

// Every screen we have in our program must be in this stack,
// following this format
const FunStack = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  HomePage: {screen: HomePageScreen},
  Advising: {screen: AdvisingScreen},
  JBE_Majors: {screen: JBE_MajorsScreen},
  JBE_Minors: {screen: JBE_MinorsScreen},
  CS_BS: {screen: CS_BSScreen},
  CE_Major: {screen: CE_MajorScreen},
  BioInfo_Major: {screen: BioInfo_MajorScreen},
  CS_Minor: {screen: CS_MinorScreen},
  CE_Minor: {screen: CE_MinorScreen},
  BioInfo_Minor: {screen: BioInfo_MinorScreen}
});

const App = createAppContainer(FunStack);

export default App;
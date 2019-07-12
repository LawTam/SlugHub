import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

// These imports are needed, one for every screen in our app
// TODO: Figure out way to do something like:
// import * from './components/pages/'

// App Skeleton
import { WelcomeScreen } from './components/pages/Skeleton/welcome';
import { HomePageScreen } from './components/pages/Skeleton/homepage';
import { AdvisingScreen} from './components/pages/Skeleton/advising';
import { EngagementScreen} from './components/pages/Skeleton/engagement';

  // Jack Baskin Engineering Page Imports
    // Majors
  import { JBE_MajorsScreen} from './components/pages/Advising/JackBaskin/jbe_majors';
  import { CS_BSScreen} from './components/pages/Advising/JackBaskin/Majors/cs_bs';
  import { CS_BAScreen} from './components/pages/Advising/JackBaskin/Majors/cs_ba';
  import { CSGD_BSScreen} from './components/pages/Advising/JackBaskin/Majors/csgd_bs';
  import { TIM_BS_Screen} from './components/pages/Advising/JackBaskin/Majors/TIM_BS';
  import { EE_BS_Screen} from './components/pages/Advising/JackBaskin/Majors/ee_bs';
  import { RE_BS_Screen} from './components/pages/Advising/JackBaskin/Majors/robo_bs';
  import { NDT_BA_Screen} from './components/pages/Advising/JackBaskin/Majors/ndt_ba';
  import { BE_ATScreen} from './components/pages/Advising/JackBaskin/Majors/BE/be_at_motor';
  import { BE_BiomoleScreen} from './components/pages/Advising/JackBaskin/Majors/BE/biomole';
  import { BE_ElecScreen} from './components/pages/Advising/JackBaskin/Majors/BE/be_bioelectronics';
  import { CE_MajorScreen}   from  './components/pages/Advising/JackBaskin/Majors/ce_major'
  import { BioInfo_MajorScreen}   from  './components/pages/Advising/JackBaskin/Majors/BE/bioinfo_major'
  import { BE_Screen} from './components/pages/Advising/JackBaskin/Majors/BE/BE_page';
    // Minors
  import { JBE_MinorsScreen} from './components/pages/Advising/JackBaskin/jbe_minors';
  import { CS_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/cs_minor';
  import { AM_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/am_minor';
  import { Statistics_Minor_Screen} from './components/pages/Advising/JackBaskin/Minors/Statistics_Minor';
  import { TIM_Minor_Screen} from './components/pages/Advising/JackBaskin/Minors/TIM_Minor';
  import { EE_Minor_Screen} from './components/pages/Advising/JackBaskin/Minors/EE_Minor';
  import { CE_MinorScreen } from './components/pages/Advising/JackBaskin/Minors/ce_minor';
  import { BioInfo_MinorScreen } from './components/pages/Advising/JackBaskin/Minors/bioinfo_minor';


  import {StudyGroup_Screen} from './components/pages/Engagement/Study_Groups/studyGroup_page';

// Every screen we have in our program must be in this stack,
// following this format
const FunStack = createStackNavigator({
  // Skeleton
  Welcome: {screen: WelcomeScreen},
  HomePage: {screen: HomePageScreen},
  Advising: {screen: AdvisingScreen},
  Engagement: {screen: EngagementScreen},

    // JackBaskin Engineering Pages
    JBE_Majors: {screen: JBE_MajorsScreen},
    JBE_Minors: {screen: JBE_MinorsScreen},
      // Majors
    CS_BS: {screen: CS_BSScreen},
    TIM_BS: {screen: TIM_BS_Screen},
    EE_BS: {screen: EE_BS_Screen},
    RE_BS: {screen: RE_BS_Screen},
    NDT_BA: {screen: NDT_BA_Screen},
    CS_BA: {screen: CS_BAScreen},
    CSGD_BS: {screen: CSGD_BSScreen},
    BE_Elec: {screen: BE_ElecScreen},
    BE_AT: {screen: BE_ATScreen},
    BE_Biomole: {screen: BE_BiomoleScreen},
    CE_Major: {screen: CE_MajorScreen},
    BioInfo_Major: {screen: BioInfo_MajorScreen},
    BE_page: {screen: BE_Screen},
      // Minors
    CS_Minor: {screen: CS_MinorScreen},
    AM_Minor: {screen: AM_MinorScreen},
    Statistics_Minor: {screen: Statistics_Minor_Screen},
    TIM_Minor: {screen: TIM_Minor_Screen},
    EE_Minor: {screen: EE_Minor_Screen},
    CE_Minor: {screen: CE_MinorScreen},
    BioInfo_Minor: {screen: BioInfo_MinorScreen},

    // Engagement
    Study_G: {screen: StudyGroup_Screen},
});

const App = createAppContainer(FunStack);

export default App;

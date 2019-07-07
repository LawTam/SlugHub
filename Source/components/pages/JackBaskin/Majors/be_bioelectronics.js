import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class BE_ElecScreen extends React.Component {
  static navigationOptions = {
    title: 'Bioelectronics',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Curriculum Chart"
        color = "#e6f542"
<<<<<<< HEAD:Source/components/pages/JackBaskin/Majors/be_bioelectronics.js
        onPress={BE_Elec_curriculum}
=======
        onPress={() => navigate('CS_Minor')}
        />
        <Button
        title="Computer Engineering"
        color = "#e6f542"
        onPress={() => navigate('CE_Minor')}
        />
        <Button
        title="Bioinformatics"
        color = "#e6f542"
        onPress={() => navigate('BioInfo_Minor')}
>>>>>>> bio/ce:Source/components/pages/jbe_minors.js
        />

    </View>

    );
  }
}


function BE_Elec_curriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-08/BENG-bioelectronics_18-19%5Bdraft%5D.pdf'
  );
}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 30,
      padding: 60,
      backgroundColor: "#4287f5",
      flex: 1
    },
  });

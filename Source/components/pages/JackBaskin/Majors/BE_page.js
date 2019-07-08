import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class BE_Screen extends React.Component {
  static navigationOptions = {
    title: 'Majors',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <Button
      title="Bioinformatics"
      color = "#e6f542"
      onPress={() => navigate('BioInfo_Major')}
      />

      <Button
      title="Bioengineering B.S. - Assistive Technology (Motor) Concentration"
      color = "#FF7F00"
      onPress={() => navigate('BE_AT')}
      />

      <Button
      title="Bioengineering BS - Bioelectronics Concentration"
      color = "#F0E68C"
      onPress={() => navigate('BE_Elec')}
      />

      <Button
      title="Biomolecular Engineering & Bioinformatics: Biomolecular"
      color = "#00FF00"
      onPress={() => navigate('BE_Biomole')}
      />

      </View>

    );
  }
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

import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class JBE_MajorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Majors',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Computer Science B.S."
        color = "#e6f542"
        onPress={() => navigate('CS_BS')}
        />

        <Button
        title="Computer Science B.A."
        color = "#B22222"
        onPress={() => navigate('CS_BA')}
        />

        <Button
        title="Computer Engineering"
        color = "#e6f542"
        onPress={() => navigate('CE_Major')}
        />

        <Button
        title="Bioinformatics"
        color = "#e6f542"
        onPress={() => navigate('BioInfo_Major')}
        />

        <Button
        title="Computer Science Game Design B.S."
        color = "#DC143C"
        onPress={() => navigate('CSGD_BS')}
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

        <Button
        title="Electrical Engineering"
        color = "#e6f542"
        onPress={() => navigate('EE_BS')}
        />
        <Button
        title="Network and Digital Technology B.A. "
        color = "#e6f542"
        onPress={() => navigate('NDT_BA')}
        />
        <Button
        title="Robotics Engineering B.S."
        color = "#e6f542"
        onPress={() => navigate('RE_BS')}
        />
        <Button
        title="Technology and Information Management B.S."
        color = "#e6f542"
        onPress={() => navigate('TIM_BS')}
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
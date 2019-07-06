import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class JBE_MinorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Minors',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Computer Science"
        color = "#e6f542"
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
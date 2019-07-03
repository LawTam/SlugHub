import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
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
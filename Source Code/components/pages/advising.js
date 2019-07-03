import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class AdvisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Advising',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Jack Baskin School of Engineering"
        color = "#e6f542"
        onPress={() => navigate('JBE')}
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
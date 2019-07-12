import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
export class CalendarScreen extends React.Component {
    

  static navigationOptions = {
    title: 'Calendar',
  };
  
  render() {
    const {navigate} = this.props.navigation;
    

    return (
    <View style= {styles.container}>
        <Text>
        Today is {today}
        </Text>
    
       

        
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
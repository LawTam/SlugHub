import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class cs_courseScreen extends React.Component {
  static navigationOptions = {
    title: 'Computer Science and Engineering Courses',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Course Offerings"
        color = "#e6f542"
        onPress={cs_courses}
        />

    </View>

    );
  }
}


function cse_courses() {
  WebBrowser.openBrowserAsync(
    'https://courses.soe.ucsc.edu/courses/cse'
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

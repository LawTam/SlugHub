import React , {Component} from '../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class am_courseScreen extends React.Component {
  static navigationOptions = {
    title: 'Applied Math Courses',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Course Offerings"
        color = "#e6f542"
        onPress={am_courses}
        />

    </View>

    );
  }
}


function am_courses() {
  WebBrowser.openBrowserAsync(
    'https://courses.soe.ucsc.edu/courses/am'
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

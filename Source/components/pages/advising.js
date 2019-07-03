import React , {Component} from '../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class AdvisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Advising',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
    <TouchableHighlight onPress={jbe_home}>
    <Image
    source={require('../../assets/images/jbe_logo.png')}
    style={{flex:1, height: undefined, width: undefined}}
    resizeMode="contain"
    />
</TouchableHighlight>
    </View>

    );
  }
}

function jbe_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 30,
      padding: 60,
      backgroundColor: "#4287f5",
      flex: 0
    },
  });

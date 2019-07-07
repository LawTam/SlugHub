import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SlugHub!',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>

        <ImageBackground 
          source={require('../../../assets/images/download.png')} 
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}>

            <TouchableHighlight onPress={jbe_home}>
              <Image
              source={require('../../../assets/images/logo.jpg')}
              style={{height: 100, width: 200}}
              resizeMode="contain"
              />
            </TouchableHighlight>

            <Button
            title="Advising"
            color = "#e6f542"
            onPress={() => navigate('Advising')}
            />
            <Button
            title="Academic"
            color = "#e6f542"
            onPress={() => navigate('Academic')}
            />
            <Button
            title="Career"
            color = "#e6f542"
            onPress={() => navigate('Career')}
            />
            <Button
            title="Academic Calendar"
            color = "#e6f542"
            onPress={() => navigate('Academic Calendar')}
            />
            <Button
            title="MyUCSC"
            color = "#e6f542"
            onPress={() => navigate('MyUCSC')}
            />
            <Button
            title="Canvas"
            color = "#e6f542"
            onPress={() => navigate('Canvas')}
            />
          </ImageBackground> 
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
      //padding: 60,
      backgroundColor: "#4287f5",
      flex: 1
    },
  });
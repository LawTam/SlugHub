import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
import { WorldAlignment } from 'expo/build/AR';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.page_container}>
        <ImageBackground 
          source={require('../../../assets/images/homepage/background.jpg')} 
          style={{width: '100%', height: '100%'}}>
            <View style = {styles.row_container}>
              <View style = {styles.logo_container}>
                <TouchableHighlight onPress={myUCSC}>
                  <Image
                  source={require('../../../assets/images/homepage/myucsc.png')}
                  style = {{height: 96, width: 96}}
                  />
                </TouchableHighlight>
                <Text>myUCSC</Text> 
              </View>
              <View style ={styles.logo_container}>
                <TouchableHighlight onPress={canvas}>
                  <Image
                  source={require('../../../assets/images/homepage/canvas.png')}
                  style = {{height: 96, width: 96}}
                  /> 
                  </TouchableHighlight>
                  <Text>Canvas</Text>
              </View>
            </View>
           
            <View style = {styles.row_container}>
            <View style = {styles.logo_container}>
            <TouchableHighlight onPress={() => navigate('Advising')}>
              <Image
              source={require('../../../assets/images/homepage/advising.png')}
              resizeMode="contain"
              />
            </TouchableHighlight>
            <Text>Advising</Text>
            </View>
            <View style = {styles.logo_container}>
            <TouchableHighlight onPress={() => navigate('Engagement')}>
              <Image
              source={require('../../../assets/images/homepage/engagement.png')}
              resizeMode="contain"
              />
            </TouchableHighlight>
            <Text>Engagement</Text>
            </View>
            </View>

            <View style = {styles.row_container}>
            <View style = {styles.logo_container}>
            <TouchableHighlight onPress={() => navigate('Athletics')}>
              <Image
              source={require('../../../assets/images/homepage/athletics.png')}
              resizeMode="contain"
              />
            </TouchableHighlight>
            <Text>Athletics</Text>
            </View>
            <View style = {styles.logo_container}>
            <TouchableHighlight onPress={() => navigate('Facility')}>
              <Image
              source={require('../../../assets/images/homepage/facilities.png')}
              resizeMode="contain"
              />
            </TouchableHighlight>
            <Text>Facility</Text>
            </View>
            </View>
          
      </ImageBackground> 
    </View>
    
    );
  }
}

function myUCSC() {
  WebBrowser.openBrowserAsync(
    'https://my.ucsc.edu/psp/csprd/?cmd=login&languageCd=ENG'
  );
}

function canvas() {
  WebBrowser.openBrowserAsync(
    'https://canvas.ucsc.edu'
  );
}

const styles = StyleSheet.create({
    page_container: {
      fontSize: 30,
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
    },

    row_container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
    },

    logo_container: {
      position: 'relative',
      justifyContent: 'flex-start',
    },

  });
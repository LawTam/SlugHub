import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Image, Text, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.pageContainer}>
        <ImageBackground 
          source={require('../../../assets/images/homepage/background.jpg')} 
          style={{width: '100%', height: '100%'}}>
              <View style = {styles.muContainer}>
                <TouchableHighlight onPress={myUCSC}>
                  <Image
                  source={require('../../../assets/images/homepage/myucsc.png')}
                  resizeMode="contain"
                  style = {{height: 65, width: 65}}
                  />
                </TouchableHighlight>
                <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>myUCSC</Text> 
              </View>
              <View style ={styles.cnContainer}>
                <TouchableHighlight onPress={canvas}>
                  <Image
                  source={require('../../../assets/images/homepage/canvas.png')}
                  resizeMode="contain"
                  style = {{height: 65, width: 65}}
                  /> 
                  </TouchableHighlight>
                  <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>Canvas</Text>
              </View>
           
            <View style = {styles.adContainer}>
            <TouchableHighlight onPress={() => navigate('Advising')}>
              <Image
              source={require('../../../assets/images/homepage/advising.png')}
              resizeMode="contain"
              style = {{height: 65, width: 65}}
              />
            </TouchableHighlight>
            <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>Advising</Text>
            </View>
            <View style = {styles.enContainer}>
            <TouchableHighlight onPress={() => navigate('Engagement')}>
              <Image
              source={require('../../../assets/images/homepage/engagement.png')}
              resizeMode="contain"
              style = {{height: 65, width: 65}}
              />
            </TouchableHighlight>
            <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>Engagement</Text>
            </View>

            <View style = {styles.atContainer}>
            <TouchableHighlight onPress={() => navigate('Athletics')}>
              <Image
              source={require('../../../assets/images/homepage/athletics.png')}
              resizeMode="contain"
              style = {{height: 65, width: 65}}
              />
            </TouchableHighlight>
            <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>Athletics</Text>
            </View>
            <View style = {styles.fcContainer}>
            <TouchableHighlight onPress={() => navigate('Facility')}>
              <Image
              source={require('../../../assets/images/homepage/facilities.png')}
              resizeMode="contain"
              style = {{height: 65, width: 65}}
              />
            </TouchableHighlight>
            <Text style={{fontWeight: 'bold', textAlign : 'center', color: '#ffffff'}}>Facility</Text>
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
    pageContainer: {
      fontSize: 30,
    },

    muContainer: {
      position: "absolute",
      top: "5%",
      left: "19%"
    },

    cnContainer:{
      position: "absolute",
      top: "5%",
      right: "19%"
    },

    adContainer: {
      position: "absolute",
      top: "22%",
      left: "19%"
    },

    enContainer: {
      position: "absolute",
      top: "22%",
      right: "17%"
    },

    atContainer: {
      position: "absolute",
      top: "39%",
      right: "19%"
    },

    fcContainer: {
      position: "absolute",
      top: "39%",
      left: "19%"
    }



  });
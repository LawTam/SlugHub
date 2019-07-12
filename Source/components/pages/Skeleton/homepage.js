import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <ImageBackground 
          source={require('../../../assets/images/UCSC_stock.jpg')} 
          //resizeMode="contain"
          style={{width: '100%', height: '100%'}}>

          {/* <Button
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
          /> */}

          <View style= {styles.myUCSCButton}> 
            <TouchableHighlight onPress={myUCSC}>
              <Image
                source={require('../../../assets/images/myUCSC_logo.png')}
                resizeMode="contain"
                style= {styles.myUCSC_image}
              /> 
            </TouchableHighlight>
          </View>
                    
          <View style= {styles.canvasButton}> 
            <TouchableHighlight onPress={canvas}>
              <Image
                source={require('../../../assets/images/canvas_logo.png')}
                resizeMode="contain"
                style= {styles.canvas_image}
                /> 
            </TouchableHighlight>
          </View> 

          <View style = {styles.advising_button}>
            <TouchableHighlight onPress={() => navigate('Advising')}>
              <Image
              source={require('../../../assets/images/logo.jpg')}
              style={
                {height: 100, width: 200}
              }
              resizeMode="contain"
              />
            </TouchableHighlight>
          </View>

          <View style = {styles.engagement_button}>
            <TouchableHighlight onPress={() => navigate('Engagement')}>
              <Image
              source={require('../../../assets/images/robot-prod.png')}
              style={{height: 100, width: 200}}
              resizeMode="contain"
              />
            </TouchableHighlight>
          </View>
          <Button
          title="Academic Calendar"
          color = "#e6f542"
          onPress={() => navigate('Calendar')}
          />
          
          
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

function jbe_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 30,
      backgroundColor: "#4287f5",
      flex: 1
    },

    myUCSC_image: {
      height:50,
      width:130,
    },

    myUCSCButton: {
      top: '30%',
      left: '13%',
      position: "absolute",
      height: 50,
      width: 130,
    },

    canvasButton: {
      top: '30%',
      left: '50%',
      position: "absolute",
      height:70, 
      width:180,
    },
    
    canvas_image: {
      height:70, 
      width:180,
    },

    advising_button: {
      top:  '10%',
      left: '5%',
      position: "absolute",
    },

    engagement_button: {
      top: '10%',
      left: '50%',
      position: "absolute",
    }


  });
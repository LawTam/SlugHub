import React from 'react';
import { TouchableHighlight, Image, StyleSheet, View, ImageBackground } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

export class FacilityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Facilities',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      
      <ImageBackground
      source={require('../../../assets/images/facilities/background.jpg')} 
      style={{width: '100%', height: '100%'}}>
      
      <View style = {styles.diningContainer}>
      <TouchableHighlight onPress = {() => navigate('Dining')}>
       <Image
       source={require('../../../assets/images/facilities/dining.png')}
       resizeMode="contain"
       style={{width: 330, height: 150}}
       />
      </TouchableHighlight>
      </View>

      <View style = {styles.fitnessContainer}>
      <TouchableHighlight onPress = {fitness}>
       <Image
       source={require('../../../assets/images/facilities/fitness.png')}
       resizeMode="contain"
       style={{width: 330, height: 150}}
       />
      </TouchableHighlight>
      </View>
      

      </ImageBackground>
      </View>
      
    );
  }
}

function fitness() {
  WebBrowser.openBrowserAsync(
    'https://opers.ucsc.edu/'
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flex: 1,
    flexDirection: 'column',
  },

  diningContainer:{
    top: 100,
    left: 40,
    position: "absolute"
  },

  fitnessContainer:{
    top: 300,
    left: 40,
    position: "absolute"
  }
});

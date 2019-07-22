import React , {Component} from 'react';
import { ImageBackground, TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';

export class DiningScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Dining',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      
      <ImageBackground
      source={require('../../../../assets/images/facilities/background.jpg')} 
      style={{width: '100%', height: '100%'}}>
      
      <View style = {styles.diningHallsContainer}>
      <TouchableHighlight onPress = {() => navigate('DiningHalls')}>
       <Image
       source={require('../../../../assets/images/facilities/diningHalls.png')}
       resizeMode="contain"
       style={{width: 330, height: 150}}
       />
      </TouchableHighlight>
      </View>

      <View style = {styles.cafeContainer}>
      <TouchableHighlight onPress = {() => navigate('Cafes')}>
       <Image
       source={require('../../../../assets/images/facilities/cafe.png')}
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flex: 1,
    flexDirection: 'column',
  },

  diningHallsContainer:{
    top: 100,
    left: 40,
    position: "absolute"
  },

  cafeContainer:{
    top: 300,
    left: 40,
    position: "absolute"
  }
});
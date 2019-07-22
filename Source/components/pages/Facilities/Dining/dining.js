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
      source={require('../../../../assets/images/facilities/dining.jpg')} 
      style={{width: '100%', height: '100%'}}>
    
      <Button
      title="Dining Halls"
      color = "#e6f542"
      onPress={() => navigate('DiningHalls')}
      />

      <Button
      title="Cafes, Restaurants and Coffee Bars"
      color = "#e6f542"
      onPress={() => navigate('Cafes')}
      />

      </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    flex: 1
  },
});
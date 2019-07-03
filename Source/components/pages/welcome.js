import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SlugHub!',
  };
  render() {
    const {navigate} = this.props.navigation;
    let pic = {
      uri: "https://www.pngkit.com/png/full/237-2373114_slug-png.png"
    };
    return (
    <View style= {styles.container}>
    <Image source={pic} style={{width: 253, height: 160}}/>
        <Button
        title="Enter the App!"
        color = "#e6f542"
        onPress={() => navigate('HomePage')}
        />

        
    </View>
    
    );
  }
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
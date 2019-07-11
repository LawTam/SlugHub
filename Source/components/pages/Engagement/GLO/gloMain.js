//glomain
import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class gloMainScreen extends React.Component {
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
      title: 'Greek Letter Organization ',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style= {styles.container}>
          <Button
            title="Cultural "
            color = "#e6f542"
            onPress={() => navigate('cultural_page')}
          />

          <Button
            title="Social"
            color = "#e6f542"
            onPress={() => navigate('social_page')}
          />

          <Button
            title="Professional "
            color = "#e6f542"
            onPress={() => navigate('professional_page')}
          />

          <Button
            title="LGBTQ"
            color = "#e6f542"
            onPress={() => navigate('lgbtq_page')}
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

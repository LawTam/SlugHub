import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
//import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class professionalScreen extends React.Component {
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
          title: 'professional',
        };
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
    
          <View style= {styles.container}>
              <Button
                title="test "
                color = "#e6f542"
                //onPress={() => navigate('fraternity_page')}
              />
          </View>
    
    
    
        );
      }
    }
    
const styles = StyleSheet.create({
    
      screen_container: {
        backgroundColor: "#4287f5",
        flex: 1
      },
    
});


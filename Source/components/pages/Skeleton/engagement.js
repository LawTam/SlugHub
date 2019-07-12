import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class EngagementScreen extends React.Component {
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
      title: 'Engagement',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

        <View style = {styles.advising_button}>
          <TouchableHighlight onPress={() => navigate('Study_G')}>
            <Image
            source={require('../../../assets/images/logo.jpg')}
            style={
              {height: 100, width: 200}
            }
            resizeMode="contain"
            />
          </TouchableHighlight>
        </View>




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

  study: {
    top: '30%',
    left: '13%',
    position: "absolute",
    height: 50,
    width: 130,
  },


});

import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class CE_MinorScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    return{
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('HomePage')}>
         <Image
           source={require('../../../../assets/images/home_icon.png')}
           style={{height: 30, width: 30}}
           resizeMode="contain"
         />
        </TouchableHighlight>
      ),
      title: 'Computer Engineering',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Curriculum Chart"
        color = "#e6f542"
        onPress={ce_minor_curriculum}
        />
        
    </View>
    
    );
  }
}

function ce_minor_curriculum() {
    WebBrowser.openBrowserAsync(
      'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-02/CE-Minor_16-17_0.pdf'
    );
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
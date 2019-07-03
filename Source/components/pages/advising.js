import React , {Component} from '../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class AdvisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Advising',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
      {/* <Button
        title="Curriculum Chart"
        color = "#e6f542"
        onPress={() => navigate('CS_BS')}
        /> */}
    <TouchableHighlight onPress={jbe_home}>
    <Image
    source={require('../../assets/images/jbe_logo.png')}
    style={{height: 100, width: 200}}
    resizeMode="contain"
    />
</TouchableHighlight>


<View style= {styles.majorButton}>
<Button
        title="Majors"
        color = "#ffffff"
        onPress={() => navigate('JBE_Majors')}
        />
        </View>


        <View style= {styles.minorButton}>
        <Button 
        title="Minors"
        color = "#ffffff"
        onPress={() => navigate('JBE_Minors')}
        />
    </View>

    </View>

    );
  }
}

function jbe_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 10,
      padding: 10,
      paddingTop: 10,
      paddingRight: 160,
      paddingBottom: 10,
      backgroundColor: "#4287f5",
      flex: 0.20
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    majorButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'gold',
      position: 'absolute',
      bottom: 25,
      right: 10,
    width: 150,
  },
  minorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: 73,
    right: 10,
    width: 150,
},
  });

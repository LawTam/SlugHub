import React , {} from 'react';
import { ImageBackground, TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

export class DiningHallsScreen extends React.Component {
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
      title: 'Dining Halls',
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
      title="Porter/Kresge"
      color = "#e6f542"
      onPress={PorterLocation}
      />
      <Button
      title="Cowell/Stevenson"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Crown/Merrill"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Rachel Carson/Oakes"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Colleges Nine & Ten"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      </ImageBackground>
      </View>

    );
  }
}

function PorterLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Porter%2FKresge+Dining+Hall/@36.9942691,-122.0681352,17z/data=!3m1!4b1!4m5!3m4!1s0x808e419e8ff298a9:0xc0cc7592fcea39a0!8m2!3d36.9942691!4d-122.0659465'
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    flex: 1
  },
});

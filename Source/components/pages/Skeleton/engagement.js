import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

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
      <Button
          title="Clubs"
          color = "#e6f542"
          onPress={() => navigate('Clubs')}
          />

      <Button
          title="Athletics / Recreational Clubs"
          color = "#e6f542"
          onPress={() => navigate('Athletics')}
          />
        
<<<<<<< HEAD
=======
        <Button
          title="LSS Tutoring"
          color = "#e6f542"
          onPress={tutoring}
          />
        <Button
          title="Library Room Booking"
          color = "#e6f542"
          onPress={library_room_reserve}
          />
>>>>>>> b06962a0b99ab9314270acda3e22afc8a74752f3

        <Button
          title="Greek Letter Organization"
          color = "#FFFF33"
          onPress={() => navigate('gloMain')}
        />
      </View>

    );
  }
}

function tutoring() {
  WebBrowser.openBrowserAsync(
    'https://sserc.ucsc.edu/slug-success'
  );
}

function library_room_reserve() {
  WebBrowser.openBrowserAsync(
    'https://calendar.library.ucsc.edu/booking/mchmc'
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

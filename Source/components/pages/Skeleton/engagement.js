import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
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

        
       <ImageBackground 
      source={require('../../../assets/images/JBE_back_temp.png')}
      style={{width: '100%', height: '100%'}}>

      <ScrollView 
           scrollEventThrottle = { 16 }
           contentContainerStyle = {{ paddingTop: 10}}
           onScroll = { Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
          )}>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={() => navigate('Clubs')}>
          <Text
            style={styles.buttonText}>
              Clubs
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={() => navigate('Athletics')}>
          <Text
            style={styles.buttonText}>
              Athletics / Recreational Clubs
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={tutoring}>
          <Text
            style={styles.buttonText}>
              LSS Tutoring
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={library_room_reserve}>
          <Text
            style={styles.buttonText}>
              Library Room Booking
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={() => navigate('Study_G')}>
          <Text
            style={styles.buttonText}>
              Study Groups
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent'
        style={styles.buttonContainer}
        onPress={() => navigate('gloMain')}>
          <Text
            style={styles.buttonText}>
              Greek Letter Organization
          </Text>
      </TouchableHighlight>
        
       <View style= {styles.emptyContainer}/>
       
      </ScrollView>
      </ImageBackground> 

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
    flex: 1
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
},
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyContainer: {
    justifyContent: "center",
    backgroundColor: "#4287f5",
    flex: .2,
    borderBottomWidth: 240,
    opacity: 0,
  },
});


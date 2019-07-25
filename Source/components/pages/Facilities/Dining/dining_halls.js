import React from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

//exporting the Screen for stack to fetch
export class Dining_HallsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      //creating the home button in navigation bar
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
  /* Structure:
      First add the image background in
      Create buttons for all dining halls
      Buttons will open a browser with the google map navigation to that correspond cafe
  */
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ImageBackground
      source={require('../../../../assets/images/facilities/background.jpg')} 
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
        onPress={porterLocation}>
          <Text
            style={styles.buttonText}>
              Porter/Kresge
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={cowellLocation}>
           <Text
             style={styles.buttonText}>
               Cowell/Stevenson
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={crownLocation}>
           <Text
             style={styles.buttonText}>
               Crown/Merrill
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={oakesLocation}>
           <Text
             style={styles.buttonText}>
               Rachel Carson/Oakes
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={c9Location}>
           <Text
             style={styles.buttonText}>
               College Nine/Ten
           </Text>
       </TouchableHighlight>
       
       <View style= {styles.emptyContainer}/>

      </ScrollView>
      </ImageBackground>
      </View>

    );
  }
}

//All the browser opening functions
function porterLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Porter%2FKresge+Dining+Hall/@36.9942691,-122.0681352,17z/data=!3m1!4b1!4m5!3m4!1s0x808e419e8ff298a9:0xc0cc7592fcea39a0!8m2!3d36.9942691!4d-122.0659465'
  );
}

function cowellLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Cowell%2FStevenson+Dining+Hall/@36.9968162,-122.0552268,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41a685745501:0x4a7d82b38d1bc7bc!8m2!3d36.9968119!4d-122.0530381'
  );
}

function crownLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Crown%2FMerrill+Dining+Hall/@37.000127,-122.0565948,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41a75b2ff18b:0x8f6e287bd3f7ade3!8m2!3d37.0001227!4d-122.0544061'
  );
}

function oakesLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Rachel+Carson%2FOakes+Dining+Hall/@36.9916234,-122.0675783,17z/data=!3m1!4b1!4m5!3m4!1s0x808e419940c684cb:0x27fb53a425d50bfd!8m2!3d36.9916191!4d-122.0653896'
  );
}

function c9Location() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Colleges+Nine+and+Ten+Dining+Hall/@37.0007348,-122.0599579,17z/data=!3m1!4b1!4m5!3m4!1s0x808e410a5df1fe0d:0x5f5ceef5d651e6ca!8m2!3d37.0007305!4d-122.0577692'
  );
}

//styles for the page container
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  //style for all buttons
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
//style for text inside buttons
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //create the empty space at the bottom half of our page
  emptyContainer: {
    justifyContent: "center",
    backgroundColor: "#4287f5",
    flex: .2,
    borderBottomWidth: 240,
    opacity: 0,
  },
});
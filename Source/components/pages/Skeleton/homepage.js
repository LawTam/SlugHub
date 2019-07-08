import React , {Component} from 'react';
import { TouchableHighlight,Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Advising"
        color = "#e6f542"
        onPress={() => navigate('Advising')}
        />
        <Button
        title="Academic"
        color = "#e6f542"
        onPress={() => navigate('Academic')}
        />
        <Button
        title="Career"
        color = "#e6f542"
        onPress={() => navigate('Career')}
        />
        <Button
        title="Academic Calendar"
        color = "#e6f542"
        onPress={() => navigate('Academic Calendar')}
        />
<View style= {styles.myUCSCButton}> 
<TouchableHighlight onPress={myUCSC}>
<Image
    source={require('../../../assets/images/myUCSC_logo.png')}
    resizeMode="contain"
    style= {styles.myUCSC_image}
    /> 
    </TouchableHighlight>
    </View>
        
    <View style= {styles.canvasButton}> 
<TouchableHighlight onPress={canvas}>
<Image
    source={require('../../../assets/images/canvas_logo.png')}
    resizeMode="contain"
    style= {styles.canvas_image}
    /> 
    </TouchableHighlight>
    </View>

        
    </View>
    
    );
  }
}

function myUCSC() {
  WebBrowser.openBrowserAsync(
    'https://my.ucsc.edu/psp/csprd/?cmd=login&languageCd=ENG'
  );
}

function canvas() {
  WebBrowser.openBrowserAsync(
    'https://canvas.ucsc.edu'
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
    myUCSC_image: {
      height:50,
      width:130,
    },
    myUCSCButton: {
    justifyContent: "center",
    flex: 0.3,
    top: -30,
    left: -60,
    height: 50,
    width: 130,
    },
      canvasButton: {
        justifyContent: "center",
        flex: 0.3,
        top: -120,
        left: 120,
        height:70, 
        width:180,
      },
      canvas_image: {
        height:70, 
        width:180,
      },
  });
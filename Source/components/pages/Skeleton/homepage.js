import React , {Component} from 'react';
import { TouchableHighlight,Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SlugHub!',
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
<View style= {styles.myUCSC}> 
<TouchableHighlight onPress={myUCSC}>
<Image
    source={require('../../../assets/images/myUCSC_logo.png')}
    resizeMode="contain"
    //style= {{height:50, width:130}}
    /> 
    </TouchableHighlight>
    </View>
        
    <View style= {styles.canvas_container}> 
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
    myUCSC: {
      
    //   alignSelf: 'flex-end',
    //   position: 'absolute',
     //bottom: -130,
     //right: 1,
    height: 50,
    width: 130,
    },
    canvas: {
      
        // alignSelf: 'flex-end',
      //   position: 'absolute',
       //bottom: -130,
       //right: 1,
      height: 100,
      width: 130,
      },
      canvas_container: {
        justifyContent: "center",
        flex: 0.3,
        bottom: 60,
        right: -120,
        height:70, 
        width:180,
      },
      canvas_image: {
        //alignSelf: 'flex-end',
        //position: 'absolute',
       // bottom: -130,
        //right: 1,
        height:70, 
        width:180,
      }
  });
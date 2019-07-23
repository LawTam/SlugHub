import React , {} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class CalendarScreen extends React.Component {
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
      title: 'Calendar',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      
      <ImageBackground
      source={require('../../../assets/images/background.jpg')} 
      style={{width: '100%', height: '100%'}}>
      
      
      <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={cal_page}>
           <Text
             style={styles.buttonText}>
               Calendar
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={sheet_page}>
           <Text
             style={styles.buttonText}>
               Task List
           </Text>
       </TouchableHighlight>      

      </ImageBackground>
      </View>
      
    );
  }
}

function cal_page() {
    WebBrowser.openBrowserAsync(
        'https://calendar.google.com/calendar/embed?src=ucsc.edu_ved3m98is1775j6tqdofmochhc@group.calendar.google.com&ctz=America/Los_Angeles&pli=1'
      );
    }

function sheet_page() {
  WebBrowser.openBrowserAsync(
    'https://docs.google.com/spreadsheets/d/1TIZfPRQYGgx5oEIxUyc_NAydjToHNuRLC4aI_TtcFjU/edit?usp=sharing'
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
  });
  
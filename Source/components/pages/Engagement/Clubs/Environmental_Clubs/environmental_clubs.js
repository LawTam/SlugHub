import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class EnvironmentalClubsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Environmental Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
    <ImageBackground 
    source={require('../../../../../assets/images/soar_1.jpg')}
    style={{width: '100%', height: '100%'}}>

     <ScrollView 
         scrollEventThrottle = { 16 }
         contentContainerStyle = {{ paddingTop: 10}}
         onScroll = { Animated.event(
           [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
        )}>

      
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Community Aid and Resources Project (CARe)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Education for Sustainable Living Program (ESLP)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Gente de la Tierra (GDLT)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Sea Slugs
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Slugs for Solar (S4S)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Student Environmental Center (SEC)
           </Text>
       </TouchableHighlight>
       

       <View style= {styles.emptyContainer}/>
      </ScrollView>
      </ImageBackground>
  </View>

    );
  }
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
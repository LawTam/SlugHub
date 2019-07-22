import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class ProfessionalClubsScreen extends React.Component {
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
      title: 'Professional Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
    <ImageBackground 
    source={require('../../../../../assets/images/JBE_back_temp.png')}
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
               Accounting Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Association of Latino Professionals in Finance & Accounting (ALPFA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               American Medical Student Association (AMSA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Gesher Group
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Health Guardians America
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Microcontrollers and Application Processors (MAAP)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Morning Sign Out (MSO)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pre-Dental Society
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pre-Law Society
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pre-Pharmacy Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pre-SOMA (Students of Osteopathic Medical Association)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pre-Veterinary Club at UCSC
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Slugs Fund Investment Group
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Society of Hispanic Professional Engineers (SHPE)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Students for Professional Development (SPD)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Tomorrow’s Medical Community
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               University Economics Association (UEA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Volunteers Around the World: Medical Outreach Program at UCSC
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
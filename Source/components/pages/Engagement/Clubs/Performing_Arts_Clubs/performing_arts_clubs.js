import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class Performing_ArtsClubsScreen extends React.Component {
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
      title: 'Peforming & Visual Arts Clubs',
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
               Acquire A Cappella
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Banana Slug Records
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Cloud 9 A Cappella
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Comedy Joust
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Fighting Slugs Marching Band
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Haluan Hip Hop Dance Troupe
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               The Hightones
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Interval
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Isang Himig Multi-Cultural A Capella
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Kadence Keys
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Kasama Ballroom Dance Troupe
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Kinetic Poetics Project (KPP)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Pagkakaisa Dance Troupe (PDT)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               People Power Acting Troupe
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Popreka
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Queery
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Rainbow Theater
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Sabrosura Latin Dance Troupe
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Sequoia Singers
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Slug Stand-Up
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Slugs in Fishnets
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Slugz II Men
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Taza Tal
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Traditional East Asian Music & Rockband
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
import React , {Component} from 'react';
import { TouchableHighlight, Image, Text,StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';

export class ClubsScreen extends React.Component {
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
      title: 'Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
   
      <ImageBackground 
      source={require('../../../../assets/images/soar_1.jpg')}
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
         onPress={() => navigate('AcademicClubs')}>
           <Text
             style={styles.buttonText}>
               Academic
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Cultural_Clubs')}>
           <Text
             style={styles.buttonText}>
               Cultural & Identity
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Environmental_Clubs')}>
           <Text
             style={styles.buttonText}>
               Environmental & Sustainability
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('General_InterestClubs')}>
           <Text
             style={styles.buttonText}>
               General Interest
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Performing_Arts_Clubs')}>
           <Text
             style={styles.buttonText}>
               Performing & Visual Arts
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Political_Clubs')}>
           <Text
             style={styles.buttonText}>
               Political & Advocacy
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Professional_Clubs')}>
           <Text
             style={styles.buttonText}>
               Professional 
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Religous_Clubs')}>
           <Text
             style={styles.buttonText}>
               Religious & Spiritual
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Service_Clubs')}>
           <Text
             style={styles.buttonText}>
               Service
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('Student_Media_Clubs')}>
           <Text
             style={styles.buttonText}>
               Student Media
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
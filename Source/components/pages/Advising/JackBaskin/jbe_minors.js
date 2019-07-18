import React , {Component} from '../../../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class JBE_MinorsScreen extends React.Component {
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
      title: 'Minors',
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView 
           scrollEventThrottle = { 16 }
           contentContainerStyle = {{ paddingTop: 10 }}
           onScroll = { Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
          )}>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('CS_Minor')}>
           <Text
             style={styles.buttonText}>
               Computer Science
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('CE_Minor')}>
           <Text
             style={styles.buttonText}>
               Computer Engineering
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('BioInfo_Minor')}>
           <Text
             style={styles.buttonText}>
               Bioinformatics
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('AM_Minor')}>
           <Text
             style={styles.buttonText}>
               Applied Math
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('EE_Minor')}>
           <Text
             style={styles.buttonText}>
               Electrical Engineering
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('Statistics_Minor')}>
           <Text
             style={styles.buttonText}>
               Statistics
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight 
         style={styles.buttonContainer}
         onPress={() => navigate('TIM_Minor')}>
           <Text
             style={styles.buttonText}>
              Technology and Information Management
           </Text>
       </TouchableHighlight>

      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: 30,
    backgroundColor: "#4287f5",
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
},
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

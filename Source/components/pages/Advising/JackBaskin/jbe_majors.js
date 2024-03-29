import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';

export class JBE_MajorsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight
        underlayColor= 'transparent' onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Majors',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      
        
      <ImageBackground 
      source={require('../../../../assets/images/JBE_back_temp.png')}
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
        onPress={() => navigate('BE_page')}>
          <Text
            style={styles.buttonText}>
              Bioengineering
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('CE_Major')}>
           <Text
             style={styles.buttonText}>
               Computer Engineering
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('CS_BS')}>
           <Text
             style={styles.buttonText}>
               Computer Science B.S.
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('CS_BA')}>
           <Text
             style={styles.buttonText}>
               Computer Science B.A.
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('CSGD_BS')}>
           <Text
             style={styles.buttonText}>
               Computer Science Game Design B.S.
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('EE_BS')}>
           <Text
             style={styles.buttonText}>
               Electrical Engineering
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('NDT_BA')}>
           <Text
             style={styles.buttonText}>
               Network and Digital Technology B.A. 
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('RE_BS')}>
           <Text
             style={styles.buttonText}>
               Robotics Engineering B.S.
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={() => navigate('TIM_BS')}>
           <Text
             style={styles.buttonText}>
              Technology and Information Management B.S.
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

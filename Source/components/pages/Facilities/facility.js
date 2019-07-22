import React , {} from 'react';
import { ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';

export class FacilityScreen extends React.Component {
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
      title: 'Facilities',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ImageBackground
      source={require('../../../assets/images/facilities/dining.jpg')} 
      style={{width: '100%', height: '100%'}}>
      
      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Fitness"
      color = "#e6f542"
      onPress={() => navigate('Fitness')}
      />

      </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    flex: 1
  },
});
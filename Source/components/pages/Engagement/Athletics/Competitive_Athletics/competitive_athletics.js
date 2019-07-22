import React from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';

export class Competitive_AthleticsScreen extends React.Component {
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
      title: 'Competitive Athletics',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Text>
      UC Santa Cruz offers NCAA Division III athletic teams in men's/women's basketball, cross-country, soccer, swimming/diving, tennis, track and field, and volleyball; and women's golf. 
        {"\n"}{"\n"}
      Competitive clubs include ballroom dance, cross-country, cycling, disc golf, equestrian, fencing, ice hockey, men's and women's lacrosse, men's and women's rugby, sailing, men's and women's soccer, women's softball, surfing, tennis, men's and women's Ultimate Frisbee, and men's and women's water polo.
      </Text>

      <Text> {"\n"}</Text>
      <Icon.Button 
            name="pagelines"
            backgroundColor="#ffcc33"
            onPress={() => navigate('Recreational_Athletics')}
          >
            Click here for more on Recreational Sports
      </Icon.Button>
    
      <Text> {"\n"}</Text>

      <Icon.Button 
            name="futbol-o"
            backgroundColor="#ffcc33"
            onPress={() => navigate('Intramural_Athletics')}
          >
            Click here for more on Intramural Competition
      </Icon.Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: 60,
    backgroundColor: "white",
    flex: 1
  },
});

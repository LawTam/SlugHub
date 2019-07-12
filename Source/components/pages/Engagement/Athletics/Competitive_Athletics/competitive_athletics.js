import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

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

      <Button
        title="More on Recreational Sports"
        color = "#e6f542"
        onPress={() => navigate('Recreational_Athletics')}
      />

      <Button
        title="More on Intramural Competition"
        color = "#e6f542"
        onPress={() => navigate('Intramural_Athletics')}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: 60,
    backgroundColor: "#4287f5",
    flex: 1
  },
});

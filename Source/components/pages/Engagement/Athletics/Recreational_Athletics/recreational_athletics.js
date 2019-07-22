

import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Text, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';

export class Recreational_AthleticsScreen extends React.Component {
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
      title: 'Recreational Sports',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Text>
      Recreational sports clubs at UCSC include aikido, backpacking, badminton, breakdance, Camp Kesem (camp for children with a parent who has cancer), cheer team, circus Slugs, dance team, grappling, judo, kayak, kendo, muay thai, ninjutsu, racquetball, table tennis, taekwondo, tango, track and field, triathlon, volleyball, and wushu.
      {"\n"}
      </Text>

      <Icon.Button
            name="trophy"
            backgroundColor="#006aad"
            onPress={recreationPage}
          >
            Click here for to visit the official UCSC Recreational Sports page
      </Icon.Button>

      <Text> {"\n"}</Text>

      <Icon.Button
            name="trophy"
            backgroundColor="#ffcc33"
            onPress={() => navigate('Competitive_Athletics')}
          >
            Click here for more on Competitive Sports
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

function recreationPage() {
  WebBrowser.openBrowserAsync(
    'https://opers.ucsc.edu/sport-clubs/competitive-clubs/index.html'
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: '10%',
    backgroundColor: "white",
    flex: 1
  },
});

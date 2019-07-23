import React from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';


export class Recreational_AthleticsScreen extends React.Component {

  /*
    Navigation bar w/ touchable highlight to navigate home
  */
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

/*  
  Order of items in render() on the screen, from top to bottom
    - Opers field banner image
    - Recreational athletics information text
    - Navigation buttons using Icon.Button
        > Official Recreation Sports link
        > competitive_sports nav button
        > intramural_sports nav button
*/
  render() {  
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <Image
        source={require('../../../../../assets/images/opers_field.png')}
        style={{height: '50%', width: '100%', backgroundColor: "white", resizeMode: 'cover'}}
        />
        <View style= {styles.container}>

        <Text>
        Recreational Sport Clubs typically have less than two competitions per year, or the club's focus is entirely at the recreational level. 
        Recreational sports clubs at UCSC include aikido, backpacking, badminton, breakdance, Camp Kesem (camp for children with a parent who has cancer), cheer team, circus Slugs, dance team, grappling, judo, kayak, kendo, muay thai, ninjutsu, racquetball, table tennis, taekwondo, tango, track and field, triathlon, volleyball, and wushu.
        {"\n"}
        </Text>

        <Icon.Button 
              name="pagelines"
              backgroundColor="#006aad"
              onPress={recreationPage}
            >
              Visit the Official Recreational Sports website
        </Icon.Button>

        <Text> {"\n"}</Text>
        
        <Icon.Button 
              name="trophy"
              backgroundColor="#ffcc33"
              onPress={() => navigate('Competitive_Athletics')}
            >
              More on Competitive Sports
        </Icon.Button>

        <Text> {"\n"}</Text>

        <Icon.Button 
              name="futbol-o"
              backgroundColor="#ffcc33"
              onPress={() => navigate('Intramural_Athletics')}
            >
            More on Intramural Competition
        </Icon.Button>

        </View>
      </ScrollView>
    );
  }
}

function recreationPage() {
  WebBrowser.openBrowserAsync(
    'https://recreation.ucsc.edu/'
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: '5%',
    backgroundColor: "white",
    flex: 1
  },
});

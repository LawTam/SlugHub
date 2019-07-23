import React from 'react';
import { TouchableHighlight, Dimensions, Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';


export class Intramural_AthleticsScreen extends React.Component {

  // Navigation bar w/ touchable highlight to navigate home
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
      title: 'Intramural Competition',
    };
  };

/*  
  Order of items in render() displayed on the screen, from top to bottom
    - Intramural banner image
    - Intramural sports information text
    - Navigation buttons using Icon.Button
        > Official Intramural website link
        > competitive_athletics nav button
        > recreational_athletics nav button
*/
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.handleLayout}>
        <ScrollView>
          <View style = {{flex:1, paddingLeft: '5%', paddingRight: '5%'}}>
            <Image
            source={require('../../../../../assets/images/Intramural_3x2.png')}
            style={{height: '20%', width: '100%', backgroundColor: "white", resizeMode: 'center'}}
            />

            <Text>
              The Intramural Sports (IM) program is one of the oldest traditions on campus beginning in the spring of 1966. Intramural Sports are a wide collection of recreational and competitive activities designed to encourage participation for all eligible people to play on campus. The program prides itself on sportsmanship, inclusion, and justice.
              {"\n"}{"\n"}
              Intramurals are structured for different skill levels and are conducted in a safe, supervised environment.  Participants do not need to be an experienced athlete to play! Intramural Sports are open to all UC Santa Cruz students currently enrolled, faculty, staff, and alumni or community members with current memberships. Intramural Sports are a fun way to play, meet friends, learn new sports, test physical ability, and relieve the stress of daily routines. Most activities allow you to select the days and times you play, as well as the people on your team.
              {"\n"}{"\n"}
            </Text>

            <Icon.Button 
                  name="futbol-o"
                  backgroundColor="#006aad"
                  wordWrap = "break-word"
                  onPress={goIntramural}
                >
                  Sign up at the Official Intramural website
            </Icon.Button>

            <Text> {"\n"}</Text>

            <Icon.Button 
                name="trophy"
                backgroundColor="#ffcc33"
                onPress={() => navigate('Competitive_Athletics')}>
              More on Competitive Sports
            </Icon.Button>

            <Text> {"\n"}</Text>

            <Icon.Button 
                name="pagelines"
                backgroundColor="#ffcc33"
                onPress={() => navigate('Recreational_Athletics')}>
              More on Recreational Sports
            </Icon.Button>

        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  handleLayout:{
    flex: 1  
  },

  container: {
    //justifyContent: "center",
    fontSize: 30,
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: "white",
    flexDirection: 'column',
    flex: 1,
  },
  banner:{
    flex: 0.2,
    backgroundColor: "white",
  }
});

function goIntramural() {
  WebBrowser.openBrowserAsync(
    'https://opers.ucsc.edu/intramurals/'
  );
}

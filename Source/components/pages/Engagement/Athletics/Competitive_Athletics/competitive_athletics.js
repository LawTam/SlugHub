import React from 'react';
import { TouchableHighlight, Image, Text, ScrollView, View, StyleSheet} from 'react-native';
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
    /*  Order of items rendered on the screen, from top to bottom
          1. navigation bar w/ touchable highlight to navigate home
          2. Competitive RUGBY banner image
          3. Competitive athletics information text
          4. Navigation buttons using Icon.Button
    */
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
          <Image
          source={require('../../../../../assets/images/rugby.png')}
          style={{height: '50%', width: '100%', backgroundColor: "white", resizeMode: 'cover'}}
          />

          <View style= {styles.container}>
            <Text>
            Competitive clubs are separate from NCAA teams. Visit the Official Sports Website on the main tab for Division III teams.
              {"\n"}{"\n"}
            Competitive Sport Clubs compete against other universities in various leagues, tournaments, meets, and matches depending on the sport they play. 
            Competitive clubs include ballroom dance, cross-country, cycling, disc golf, equestrian, fencing, ice hockey, men's and women's lacrosse, men's and women's rugby, sailing, men's and women's soccer, women's softball, surfing, tennis, men's and women's Ultimate Frisbee, and men's and women's water polo.
            </Text>

            <Text> {"\n"}</Text>

            <Icon.Button 
              name="trophy"
              backgroundColor="#006aad"
              onPress={competitivePage}
            >
              Visit the Official Competitive Clubs website
            </Icon.Button>

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
      </ScrollView>
    );
  }
}

function competitivePage() {
  WebBrowser.openBrowserAsync(
    'https://opers.ucsc.edu/sport-clubs/competitive-clubs/index.html'
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

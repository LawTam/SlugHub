import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

// npm install --save react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';

// npm i react-native-whc-banner --save
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner'

export class AthleticsScreen extends React.Component {
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
      title: 'Athletics / Recreational Sports',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style = {styles.page}>
          <Banner style = {styles.banner}
            indicaterType={IndicaterType.number_title}
            indicaterAlign={IndicaterAlign.right}
            titles = {['UCSC offers an intramural league','Our Mascot, Sammy the Slug, has his own athletic logo', 'Sammy shows himself']}
            autoLoop = {true}
            autoPlay = {true}
            duration = {1000}>
              <View >< Image style = {styles.img} source = {require('../../../../assets/images/GoSlugsBanner.jpg')}/></View>
              <View ><Image style = {styles.img} source = {require('../../../../assets/images/SammyAthletics.jpg')}/></View>
              <View ><Image style = {styles.img} source = {require('../../../../assets/images/Intramural.png')} /></View>
          </Banner> 

          <View style= {styles.container}>
            <Icon.Button 
                  name="trophy"
                  backgroundColor="#ffcc33"
                  onPress={goSlugs}
                >
                  Click here to enter the UCSC NCAA website.
            </Icon.Button>

            <Text style="center">
            {"\n"} {"\n"} 
              UCSC offers both competitive and recreational sports clubs. Intramural competition is also popular at UC Santa Cruz.
            </Text>

            <Icon.Button 
                  name="trophy"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Competitive_Athletics')}
                >
                  Click here for more on Competitive Sports
            </Icon.Button>

            <Text>
            {"\n"} {"\n"} 
              Recreational sports clubs at UCSC include aikido, backpacking, badminton, breakdance, Camp Kesem (camp for children with a parent who has cancer), cheer team, circus Slugs, dance team, grappling, judo, kayak, kendo, muay thai, ninjutsu, racquetball, table tennis, taekwondo, tango, track and field, triathlon, volleyball, and wushu.
            </Text>

            <Icon.Button 
                  name="pagelines"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Recreational_Athletics')}
                >
                  Click here for more on Recreational Sports
            </Icon.Button>

            <Text>
              {"\n"} {"\n"} 
              Intramurals are structured for different skill levels and are conducted in a safe, supervised environment.  Participants do not need to be an experienced athlete to play! 
            </Text>

            <Icon.Button 
                  name="futbol-o"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Intramural_Athletics')}
                >
                  Click here for more on Intramural Competition
            </Icon.Button>

          </View>
        </View>
      </ScrollView>
    );
  }
}

function goSlugs() {
  WebBrowser.openBrowserAsync(
    'https://www.goslugs.com/landing/index'
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor: '#4287f5',
  },
  container: {
    //justifyContent: "center",
    fontSize: 30,
    padding: 60,
    position:'relative'
  },
  banner:{
    display: 'flex',
    height: '20%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  img:{
    flex: 1,
    //flexBasis: '100%',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    resizeMode: 'stretch',
  }
});

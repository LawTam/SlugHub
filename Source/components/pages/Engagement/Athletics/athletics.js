import React from 'react';
import { ScrollView, TouchableHighlight, Image, Text, StyleSheet, View, Dimensions} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

// npm install --save react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';

// npm i react-native-whc-banner --save
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

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
    /*  Order of items rendered on the screen, from top to bottom
          1. navigation bar w/ touchable highlight to navigate home
          2. Slideshow banner [intramural.png, athletic_slug.png, SammyAthletics.png]
          3. Official UCSC Athletics website Icon.Button
          4. Text on sports
          5. competitive_athletics nav button
          6. Recreation text
          7. recreational_athletics nav button
          8. Intramural text
          9. intramural_athletics nav button
    */

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
              <View>< Image style = {styles.img} source = {require('../../../../assets/images/Intramural.png')}/></View>
              <View><Image style = {styles.img} source = {require('../../../../assets/images/athletic_slug.png')}/></View>
              <View><Image style = {styles.img} source = {require('../../../../assets/images/SammyAthletics.png')} /></View>
          </Banner> 

          <View style= {styles.container}>
            <Icon.Button 
                  name="trophy"
                  backgroundColor="#006aad"
                  wordWrap = "break-word"
                  onPress={goSlugs}
                >
                  Visit the Official UCSC Athletics website
            </Icon.Button>

            <Text style="center">
              {"\n"} {"\n"} 
              UC Santa Cruz is known for its Divison III sports teams and extensive intramural competition program, where UCSC students can compete in friendly competition.
            </Text>

            <Text style="center">
              {"\n"} {"\n"} 
              UCSC offers both competitive and recreational sports clubs.
              {"\n"} 
              Competitive clubs include Division III teams and teams such as ballroom dancing, sailing, ultimate frisbee, and more.
              {"\n"} {"\n"} 
            </Text>

            <Icon.Button 
                  name="trophy"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Competitive_Athletics')}
                >
                  More on Competitive Sports
            </Icon.Button>

            <Text>
              {"\n"} {"\n"} 
              Recreational sports clubs at UCSC include aikido, backpacking, badminton, breakdance, triathlon, volleyball, and more.
              {"\n"} {"\n"} 
            </Text>

            <Icon.Button 
                  name="pagelines"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Recreational_Athletics')}
                >
                  More on Recreational Sports
            </Icon.Button>

            <Text>
              {"\n"} {"\n"} 
              Intramurals are structured for different skill levels and are conducted in a safe, supervised environment.  Participants do not need to be an experienced athlete to play! 
              {"\n"} {"\n"} 
            </Text>

            <Icon.Button 
                  name="futbol-o"
                  backgroundColor="#ffcc33"
                  onPress={() => navigate('Intramural_Athletics')}
                >
                  More on Intramural Competition
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
    backgroundColor: 'white',
  },

  banner:{
    display: 'flex',
    height: '20%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  img:{
    flexDirection: 'row',
    justifyContent: "space-evenly",
    resizeMode: 'contain',
    width: BannerWidth,
    height: BannerHeight 
  },

  container: {
    fontSize: 30,
    padding: '5%',
    position:'relative'
  },
});

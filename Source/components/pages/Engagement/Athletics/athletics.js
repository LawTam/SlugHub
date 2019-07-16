import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style= {styles.container}>

      <Text style="center">
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

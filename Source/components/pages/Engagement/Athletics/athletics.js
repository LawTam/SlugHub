import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

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

      <Button
        title="Click here for more on Competitive Sports"
        color = "#e6f542"
        onPress={() => navigate('Competitive_Athletics')}
      />

      <Text>
        Recreational sports clubs at UCSC include aikido, backpacking, badminton, breakdance, Camp Kesem (camp for children with a parent who has cancer), cheer team, circus Slugs, dance team, grappling, judo, kayak, kendo, muay thai, ninjutsu, racquetball, table tennis, taekwondo, tango, track and field, triathlon, volleyball, and wushu.
      </Text>

      <Button
        title="Click here for more on Recreational Sports"
        color = "#e6f542"
        onPress={() => navigate('Recreational_Athletics')}
      />

      <Text>
        Intramurals are structured for different skill levels and are conducted in a safe, supervised environment.  Participants do not need to be an experienced athlete to play! 
      </Text>
      <Button
        title="Click here for more on Intramural Competition"
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

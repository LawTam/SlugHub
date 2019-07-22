import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Text,StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Intramural_AthleticsScreen extends React.Component {
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
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Text>
      The Intramural Sports (IM) program is one of the oldest traditions on campus beginning in the spring of 1966. Intramural Sports are a wide collection of recreational and competitive activities designed to encourage participation for all eligible people to play on campus. The program prides itself on sportsmanship, inclusion, and justice.
        {"\n"}{"\n"}
        Intramurals are structured for different skill levels and are conducted in a safe, supervised environment.  Participants do not need to be an experienced athlete to play! Intramural Sports are open to all UC Santa Cruz students currently enrolled, faculty, staff, and alumni or community members with current memberships. Intramural Sports are a fun way to play, meet friends, learn new sports, test physical ability, and relieve the stress of daily routines. Most activities allow you to select the days and times you play, as well as the people on your team.
        {"\n"}{"\n"}
        Registration process: Login to imleagues.com FIRST using your CruzID login credentials and create/join your team(s), then pay for your All-Access pass via campusrec.ucsc.edu. This method allows captains and participants to ensure they get into a desired league and time slot prior to payment.
      </Text>

      <Icon.Button 
            name="trophy"
            backgroundColor="#ffcc33"
            onPress={() => navigate('Competitive_Athletics')}
          >
            Click here for more on Competitive Sports
      </Icon.Button>

      <Icon.Button 
            name="pagelines"
            backgroundColor="#ffcc33"
            onPress={() => navigate('Recreational_Athletics')}
          >
            Click here for more on Recreational Sports
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

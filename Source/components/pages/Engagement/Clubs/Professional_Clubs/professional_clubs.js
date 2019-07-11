import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class ProfessionalClubsScreen extends React.Component {
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
      title: 'Professional Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="Accounting Association"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Association of Latino Professionals in Finance & Accounting (ALPFA)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="American Medical Student Association (AMSA)"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Gesher Group"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Health Guardians America"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Microcontrollers and Application Processors (MAAP)"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Morning Sign Out (MSO)"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Pre-Dental Society"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Pre-Law Society"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Pre-Pharmacy Student Association"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Pre-SOMA (Students of Osteopathic Medical Association)"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Pre-Veterinary Club at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Slugs Fund Investment Group"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Society of Hispanic Professional Engineers (SHPE)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Students for Professional Development (SPD)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

<Button
      title="Tomorrow’s Medical Community"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="University Economics Association (UEA)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Volunteers Around the World: Medical Outreach Program at UCSC"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

</ScrollView>
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

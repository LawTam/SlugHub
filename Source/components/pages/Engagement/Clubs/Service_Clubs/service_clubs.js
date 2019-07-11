import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class ServiceClubsScreen extends React.Component {
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
      title: 'Service Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="American Red Cross Association"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Best Buddies"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Circle K International"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Colleges Against Cancer (CAC)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Emergency Medical Slugs"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Happy Cart Project"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="International Volunteers Headquarters"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Medicine, Education, Development for low income families everywhere at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Oxfam America at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Rotaract Club of Santa Cruz County"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Students for Haiti Solidarity at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Type 1 Diabetes Association"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
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

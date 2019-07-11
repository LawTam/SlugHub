import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class EnvironmentalClubsScreen extends React.Component {
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
      title: 'Environmental Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <Button
      title="Community Aid and Resources Project (CARe)"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Education for Sustainable Living Program (ESLP)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Gente de la Tierra (GDLT)"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Sea Slugs"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Slugs for Solar (S4S)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Student Environmental Center (SEC)"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
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

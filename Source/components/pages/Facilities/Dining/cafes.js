import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class CafesScreen extends React.Component {
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
      title: 'Cafes, Restaurants and Coffee Bars',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <Button
      title="Banana Joe's"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Bay Tree Express Store"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Bowls by Café Brasil"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="College Eight Cafe"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Global Village Cafe by Amazon Juices"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Perk Coffee Bar at Baskin Engineering"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Perk Coffee Bar at Physical Sciences Building"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />
      <Button
      title="Terra Fresca Restaurant & Coffee Bar"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
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
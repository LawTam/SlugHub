import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class DiningHallsScreen extends React.Component {
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
      title: 'Dining Halls',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
      color = "#e6f542"
      onPress={() => navigate('Dining')}
      />

      <Button
      title="Dining"
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
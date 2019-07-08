import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class JBE_MajorsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Majors',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Button
      title="Bioengineering"
      color = "#e6f542"
      onPress={() => navigate('BE_page')}
      />

      <Button
      title="Computer Engineering"
      color = "#e6f542"
      onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Computer Science B.S."
      color = "#e6f542"
      onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Computer Science B.A."
      color = "#B22222"
      onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Computer Science Game Design B.S."
      color = "#DC143C"
      onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Electrical Engineering"
      color = "#e6f542"
      onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Network and Digital Technology B.A. "
      color = "#e6f542"
      onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Robotics Engineering B.S."
      color = "#e6f542"
      onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Technology and Information Management B.S."
      color = "#e6f542"
      onPress={() => navigate('TIM_BS')}
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

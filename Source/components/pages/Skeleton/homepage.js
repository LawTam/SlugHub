import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class HomePageScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Advising"
        color = "#e6f542"
        onPress={() => navigate('Advising')}
        />
        <Button
        title="Academic"
        color = "#e6f542"
        onPress={() => navigate('Academic')}
        />
        <Button
        title="Career"
        color = "#e6f542"
        onPress={() => navigate('Career')}
        />
        <Button
        title="Academic Calendar"
        color = "#e6f542"
        onPress={() => navigate('Academic Calendar')}
        />
        <Button
        title="MyUCSC"
        color = "#e6f542"
        onPress={() => navigate('MyUCSC')}
        />
        <Button
        title="Canvas"
        color = "#e6f542"
        onPress={() => navigate('Canvas')}
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
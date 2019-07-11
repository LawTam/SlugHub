import React , {Component} from '../../../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class JBE_MinorsScreen extends React.Component {
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
      title: 'Minors',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Computer Science"
        color = "#FF0000"
        onPress={() => navigate('CS_Minor')}
        />

        <Button
        title="Computer Engineering"
        color = "#e6f542"
        onPress={() => navigate('CE_Minor')}
        />

        <Button
        title="Bioinformatics"
        color = "#e6f542"
        onPress={() => navigate('BioInfo_Minor')}
        />

        <Button
        title="Applied Math"
        color = "#FF7F00"
        onPress={() => navigate('AM_Minor')}
        />

        <Button
        title="Electrical Engineering"
        color = "#e6f542"
        onPress={() => navigate('EE_Minor')}
        />
        <Button
        title="Statistics"
        color = "#e6f542"
        onPress={() => navigate('Statistics_Minor')}
        />
        <Button
        title="Technology and Information Management"
        color = "#e6f542"
        onPress={() => navigate('TIM_Minor')}
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

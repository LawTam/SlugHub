import React from 'react';
import { TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class BE_ATScreen extends React.Component {
  /*
    Renders the top bar navigator and home navigation icon
  */
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Bioengineering: Assistive Technology (Motor)',
    };
  };
  /* 
    render() :
      - Contains a link to the Bioengineering: Assistive Technology (Motor) curriculum chart
  */
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Curriculum Chart"
        color = "#e6f542"
        onPress={BE_AT_curriculum}
        />

    </View>

    );
  }
}


function BE_AT_curriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-08/BENG-motor_18-19%5Bdraft%5D.pdf'
  );
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

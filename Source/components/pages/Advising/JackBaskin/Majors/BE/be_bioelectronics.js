import React from 'react';
import { TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class BE_ElecScreen extends React.Component {
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
      title: 'Bioelectronics',
    };
  };
  /* 
    render() :
      - Contains a link to the Bioelectronics curriculum chart
  */
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
        <Button
        title="Curriculum Chart"
        color = "#e6f542"
        onPress={BE_Elec_curriculum}
        />

    </View>

    );
  }
}


function BE_Elec_curriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-08/BENG-bioelectronics_18-19%5Bdraft%5D.pdf'
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

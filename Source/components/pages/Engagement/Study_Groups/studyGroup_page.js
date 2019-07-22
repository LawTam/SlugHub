import React , {Component} from 'react';
import { TouchableHighlight, Image, Text,StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class StudyGroup_Screen extends React.Component {
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
      title: 'Study Groups',
      //titleText: "If you are new to our study groups, join our course using code 'UMDv7y1OTI' ",
    };
  };


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

        <View style= {styles.top}>

          <TouchableHighlight onPress={grepthink}>
            <Image
              source={require('../../../../assets/images/grepthink_logo.png')}
              style={styles.gt_button}
              resizeMode="contain"
              />
          </TouchableHighlight>

        </View>

        <Text style={{fontWeight: 'bold'}}>
          If you are new to our study groups, join our course using code 'UMDv7y1OTI'
      </Text>

      </View>

    );
  }
}

function grepthink() {
  WebBrowser.openBrowserAsync(
    'https://www.grepthink.com/course/fall-2019-study-grou/'
  );
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: "center",
    fontSize: 30,
    //padding: 60,
    backgroundColor: "#4287f5",
    flex: 1
  },


  top: {
    justifyContent: "center",
    fontSize: 30,
    padding: 60,
    backgroundColor: "#658725",
    flex: .3
  },

  gt_button: {
    top: '0%',
    left: '0%',
    bottom: '-10%',
    //position: "absolute",
    height: '70%',
    width: '100%',
  },

});

import React from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';

export class StudyGroupScreen extends React.Component {
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
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <Image
        source={require('../../../../assets/images/grepthink_logo.png')}
        style={{height: '50%', width: '100%', backgroundColor: "white", resizeMode: 'cover'}}
        />
        <View style= {styles.container}>

        <Text>
      If you are new to our study groups, join our course using code 'UMDv7y1OTI' {"\n"}
      By joining our course, you will be able to create and join study groups in order to fully succeed in your academic career.
        {"\n"}
        </Text>

        <Icon.Button
              name="pagelines"
              backgroundColor="#006aad"
              onPress={grepthink}
            >
              Visit the GrepThink Website
        </Icon.Button>

        <Text> {"\n"}</Text>



        </View>
      </ScrollView>
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
    justifyContent: "center",
    fontSize: 30,
    padding: '5%',
    backgroundColor: "white",
    flex: 1
  },
});

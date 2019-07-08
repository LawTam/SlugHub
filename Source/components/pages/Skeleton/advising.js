import React , {Component} from '../../../node_modules/react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class AdvisingScreen extends React.Component {
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
      title: 'Advising',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style= {styles.screen_container}>



        <View style= {styles.jbe_container}>
          <ImageBackground
            source={require('../../../assets/images/engineering.png')}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>

            <View style = {styles.touch_container}>
              <TouchableHighlight onPress={jbe_home}>
                <Image
                  source={require('../../../assets/images/jbe_logo.png')}
                  style={{height: 100, width: 180}}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>

            <View style= {styles.majorButton}>
              <Button
                title="Majors"
                color = "#FFFFFF"
                onPress={() => navigate('JBE_Majors')}
              />
            </View>


            <View style= {styles.minorButton}>
              <Button
                title="Minors"
                color = "#FFFFFF"
                onPress={() => navigate('JBE_Minors')}
              />
            </View>

          </ImageBackground>
        </View>



        <View style= {styles.pbsci_container}>
          <ImageBackground
            source={require('../../../assets/images/pbsci.jpg')}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>

            <View style = {styles.smallTouch_container}>
              <TouchableHighlight onPress={pbsci_home}>
                <Image
                  source={require('../../../assets/images/pbsci_logo.png')}
                  style={{height: 83, width: 200}}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>

            <View style= {styles.majorButton}>
              <Button
                title="PBSCI Majors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.minorButton}>
              <Button
                title="PBSCI Minors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Minors')}
              />
            </View>

          </ImageBackground>
        </View>


        <View style= {styles.ss_container}>

          <ImageBackground
            source={require('../../../assets/images/socialSciences.jpg')}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>

            <View style = {styles.smallTouch_container}>
              <TouchableHighlight onPress={ss_home}>
                <Image
                  source={require('../../../assets/images/ss_logo.png')}
                  style={{height: 82, width: 200}}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>

            <View style= {styles.majorButton}>
              <Button
                title="SS Majors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.minorButton}>
              <Button
                title="SS Minors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Minors')}
              />
            </View>

          </ImageBackground>
        </View>



        <View style= {styles.hum_container}>

          <ImageBackground
            source={require('../../../assets/images/humanities.jpg')}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>

            <View style = {styles.longTouch_container}>
              <TouchableHighlight onPress={hum_home}>
                <Image
                  source={require('../../../assets/images/hum_logo.png')}
                  style={{height: 100, width: 200}}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>

            <View style= {styles.majorButton}>
              <Button
                title="HUM Majors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.minorButton}>
              <Button
                title="HUM Minors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Minors')}
              />
            </View>

          </ImageBackground>
        </View>


        <View style= {styles.art_container}>

          <ImageBackground
            source={require('../../../assets/images/art.jpg')}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>

            <View style = {styles.smallTouch_container}>
              <TouchableHighlight onPress={art_home}>
                <Image
                  source={require('../../../assets/images/art_logo.png')}
                  style={{height: 78, width: 200}}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>

            <View style= {styles.majorButton}>
              <Button
                title="ART Majors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.minorButton}>
              <Button
                title="ART Minors"
                color = "#FFFFFF"
                //onPress={() => navigate('JBE_Minors')}
              />
            </View>
          </ImageBackground>
        </View>



      </View>


    );
  }
}

function jbe_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function pbsci_home() {
  WebBrowser.openBrowserAsync(
    'https://pbsci.ucsc.edu/index.html'
  );
}

function ss_home() {
  WebBrowser.openBrowserAsync(
    'https://humanities.ucsc.edu/'
  );
}

function hum_home() {
  WebBrowser.openBrowserAsync(
    'https://socialsciences.ucsc.edu/'
  );
}

function art_home() {
  WebBrowser.openBrowserAsync(
    'http://arts.ucsc.edu/'
  );
}

const styles = StyleSheet.create({

  screen_container: {
    backgroundColor: "#4287f5",
    flex: 1
  },

  touch_container: {
    paddingLeft: 20

  },

  smallTouch_container: {
    paddingLeft: 20,
    paddingTop: 16.5,
  },

  longTouch_container:{
    paddingLeft: 6
  },

  jbe_container: {
    justifyContent: "center",
    fontSize: 10,
    // padding: 10,
    // paddingTop: 10,
    // paddingRight: 160,
    // paddingBottom: 10,
    // paddingLeft: 10,
    backgroundColor: "#D8BFD8",
    flex: .2,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 4,
  },

  pbsci_container: {
    justifyContent: "center",
    fontSize: 10,
    // padding: 10,
    // paddingTop: 10,
    // paddingRight: 160,
    // paddingBottom: 10,
    backgroundColor: "#000000",
    flex: .2,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 4,
  },

  ss_container: {
    justifyContent: "center",
    fontSize: 10,
    // padding: 10,
    // paddingTop: 10,
    // paddingRight: 160,
    // paddingBottom: 10,
    backgroundColor: "#228B22",
    flex: .2,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 4,
  },

  hum_container: {
    justifyContent: "center",
    fontSize: 10,
    // padding: 10,
    // paddingTop: 10,
    // paddingRight: 160,
    // paddingBottom: 10,
    backgroundColor: "#FFA500",
    flex: .2,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 4,
  },

  art_container: {
    justifyContent: "center",
    fontSize: 10,
    // padding: 10,
    // paddingTop: 10,
    // paddingRight: 160,
    // paddingBottom: 10,
    backgroundColor: "#40E0D0",
    flex: .2,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
  },


  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  majorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '55.5%',
    right: 10,
    width: 150,
    opacity: .9,
  },
  minorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '15%',
    right: 10,
    width: 150,
    opacity: .9,
  },

  pbsci_majorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '62.5%',
    right: 10,
    width: 150,
  },
  pbsci_minorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '22%',
    right: 10,
    width: 150,
  },


});

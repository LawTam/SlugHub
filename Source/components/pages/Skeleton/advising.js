import React from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class AdvisingScreen extends React.Component {
  
  /*
    AppNavigator with home navigation button
  */
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

/*
  render(): (top to bottom)
    - ImageBackground creates ucsc front picture
    - Jack Baskin Engineering department container
        > TouchableHighlight: logo image, directs to department website
        > jbe_major nav link
        > jbe_minor nav link
    - Physical and Biological Sciences + Math department container
        > TouchableHighlight: logo image, directs to department website
        > jbe_major nav link
        > jbe_minor nav link
    - Art department container
        > TouchableHighlight: logo image, directs to department website
        > jbe_major nav link
        > jbe_minor nav link
    - Humanities department container
        > TouchableHighlight: logo image, directs to department website
        > jbe_major nav link
        > jbe_minor nav link
    - Social Sciences department container
        > TouchableHighlight: logo image, directs to department website
        > jbe_major nav link
        > jbe_minor nav link
*/
  render() { 
    const {navigate} = this.props.navigation; 
    return (
      <View style= {styles.screen_container}>
        
       <ImageBackground
        source = {require('../../../assets/images/homepage/background.jpg')}
        style={{width: '100%', height: '100%', flex: 1}}>

        <View style = {styles.major_container}> 
          <TouchableHighlight underlayColor='transparent' style = {styles.dept_logo} onPress={jbe_home}>
            <View >
              <Image
                source={require('../../../assets/images/jbe_logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          </TouchableHighlight>
          <View style = {styles.majorminor}>
              <View style= {styles.majorButton}>
                <Button
                  title="Majors"
                  color = "black"
                  onPress={() => navigate('JBE_Majors')}
                />
              </View>
              <View style= {styles.minorButton}>
                <Button
                  title="Minors"
                  color = "black"
                  onPress={() => navigate('JBE_Minors')}
                />
              </View> 
          </View> 
        </View>
      
        <View style= {styles.major_container}>
          <TouchableHighlight underlayColor='transparent' style = {styles.dept_logo} onPress={pbsci_home}>
            <View >
              <Image
                source={require('../../../assets/images/pbsci_logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          </TouchableHighlight>
          <View style = {styles.majorminor}>
              <View style= {styles.majorButton}>
                <Button
                  title="Majors"
                  color = "black"
                  onPress={() => navigate('JBE_Majors')}
                />
              </View>
              <View style= {styles.minorButton}>
                <Button
                  title="Minors"
                  color = "black"
                  onPress={() => navigate('JBE_Minors')}
                />
              </View> 
          </View> 
        </View>

        <View style= {styles.major_container}>
          <TouchableHighlight underlayColor='transparent' style = {styles.dept_logo} onPress={art_home}>
            <View >
              <Image
                source={require('../../../assets/images/art_logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          </TouchableHighlight>
          <View style = {styles.majorminor}>
              <View style= {styles.majorButton}>
                <Button
                  title="Majors"
                  color = "black"
                  onPress={() => navigate('JBE_Majors')}
                />
              </View>
              <View style= {styles.minorButton}>
                <Button
                  title="Minors"
                  color = "black"
                  onPress={() => navigate('JBE_Minors')}
                />
              </View> 
          </View> 
        </View>

        <View style= {styles.major_container}>
          <TouchableHighlight underlayColor='transparent' style = {styles.dept_logo} onPress={hum_home}>
            <View >
              <Image
                source={require('../../../assets/images/humanities_logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          </TouchableHighlight>
          <View style = {styles.majorminor}>
              <View style= {styles.majorButton}>
                <Button
                  title="Majors"
                  color = "black"
                  onPress={() => navigate('JBE_Majors')}
                />
              </View>
              <View style= {styles.minorButton}>
                <Button
                  title="Minors"
                  color = "black"
                  onPress={() => navigate('JBE_Minors')}
                />
              </View> 
          </View> 
        </View>

        <View style= {styles.major_container}>
          <TouchableHighlight underlayColor='transparent' style = {styles.dept_logo} onPress={ss_home}>
            <View >
              <Image
                source={require('../../../assets/images/socialsciences_logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          </TouchableHighlight>
          <View style = {styles.majorminor}>
              <View style= {styles.majorButton}>
                <Button
                  title="Majors"
                  color = "black"
                  onPress={() => navigate('JBE_Majors')}
                />
              </View>
              <View style= {styles.minorButton}>
                <Button
                  title="Minors"
                  color = "black"
                  onPress={() => navigate('JBE_Minors')}
                />
              </View> 
            </View> 
          </View>
        </ImageBackground> 
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

function hum_home() {
  WebBrowser.openBrowserAsync(
    'https://humanities.ucsc.edu/'
  );
}

function ss_home() {
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
    flex: 1
  },

  dept_logo: {
    paddingLeft: '5%',
    paddingTop: '1%',
    alignContent: 'center',
    flex: 0.5,
  },

  majorminor: {
    flex: 0.5,
    flexDirection: 'column'
  }, 
  majorButton: {
    alignItems: 'center',
    backgroundColor: 'gold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '3%',
    opacity: 1,
    borderRadius: 7,
    flex: 0.5,
  }, 
  minorButton: {
    alignItems: 'center',
    backgroundColor: 'gold',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '4%',
    opacity: 1,
    borderRadius: 7,
    flex: 0.5,
  },

  major_container: {
    justifyContent: "center",
    fontSize: 10,
    backgroundColor: "white",
    flex: .18,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    paddingTop: '1%',
    borderRadius: 10,
    flexDirection: 'row',
  },
});
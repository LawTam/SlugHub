//sorority
import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated } from 'react-native';
//import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
  
const Header_Maximum_Height = 0;

export class sororityScreen extends React.Component {
  constructor()   
    {
        super();
 
        this.AnimatedHeaderValue = new Animated.Value(0);
 
    }
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
          title: 'sorority',
        };
      };
      render() {
        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
          inputRange: [ 0, ( 10 )  ],
          outputRange: [ '#009688', '#00BCD4' ],
          extrapolate: 'clamp'
        });
  
        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
          inputRange: [ 0, ( 10 ) ],
          outputRange: [ 5, 5 ],
          extrapolate: 'clamp'
        });
        const {navigate} = this.props.navigation;
        return (

        <View style= {styles.screen_container}>
          <ScrollView 
           scrollEventThrottle = { 16 }
           contentContainerStyle = {{ paddingTop: 10 }}
           onScroll = { Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
          )}>



          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>
        
          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>

          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>
        
          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>
        
          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>
        

          <View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>UCSC SIGMA ALPHA EPSILON PI</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                //onPress={() => navigate('JBE_Majors')}
              />
            </View>
          </View>
        </ScrollView>


        </View>
    
        );
      }
    }
    

    const styles = StyleSheet.create({

      screen_container: {
        backgroundColor: "#4287f5",
        flex: 1
      },
    
      image_container: {
        paddingLeft: 20
    
      },

      orgs_container: {
        justifyContent: "center",
        fontSize: 10,
        backgroundColor: "#4287f5",
        flex: .2,
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 4,
      },
      
      OSButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'gold',
        position: 'absolute',
        bottom: '55.5%',
        right: 10,
        width: 150,
        opacity: .9,
        borderRadius: 7,
      },
      FacebookButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'gold',
        position: 'absolute',
        bottom: '15%',
        right: 10,
        width: 150,
        opacity: .9,
        borderRadius: 7,
      },
    
    
    });
    
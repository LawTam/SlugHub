import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated } from 'react-native';
//import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
import { FloatingAction } from "react-native-floating-action";

export class professionalScreen extends React.Component {
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
          title: 'professional',
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

        const actions = [
          {
            text: "Greek letter Orgs",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "gloMain",
            position: 1
          },
          {
            text: "Cultural",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "cultural_page",
            position: 2
          },
          {
            text: "Social",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "social_page",
            position: 3
          },
          {
            text: "Service",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "service_page",
            position: 4
          },
          {
            text: "Professional",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "professional_page",
            position: 5
          },
          {
            text: "LGBTQ",
            icon: require('../../../../assets/images/home_icon.png'),
            name: "lgbtq_page",
            position: 5
          }
        ];

        const {navigate} = this.props.navigation;
        return (
    
          <View style= {styles.screen_container}>
          <ImageBackground 
          source={require('../../../../assets/images/UCSC_stock.jpg')}
          style={{width: '100%', height: '100%'}}>
            
          
            <ScrollView 
           scrollEventThrottle = { 16 }
           contentContainerStyle = {{ paddingTop: 10 }}
           onScroll = { Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
          )}>


<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Alpha_Kappa_Psi_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Alpha Kappa Psi (ΑΚΨ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('AKP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('AKP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/deltasigmapi2018_1.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Delta Sigma Pi (ΔΣΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('DSP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('DSP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/kappagammadelta_1.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Kappa Gamma Delta (KΓΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('KGD_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('KGD_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Phi_Alpha_Delta_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Phi Alpha Delta (ΦAΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('PAD_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('PAD_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/sigmamu2018_1.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Mu Delta (ΣΜΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('SMD_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('SMD_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            
          </View>
        
          </ScrollView>
              
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            navigate(`${name}`); 
          }}
        />
          </ImageBackground>
          </View>
          
    
        );
      }
    }


function AKP_home() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function AKP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function DSP_home() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function DSP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function KGD_home() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function KGD_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function PAD_home() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function PAD_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function SMD_home() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }

function SMD_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.soe.ucsc.edu/'
      );
    }
    
    const styles = StyleSheet.create({
      screen_container: {
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: "#4287f5",
        flex: 1
      },
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
    
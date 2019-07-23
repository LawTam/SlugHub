import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Text,StyleSheet, View, ScrollView, Animated } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { FloatingAction } from "react-native-floating-action";

export class serviceScreen extends React.Component {
  constructor()   
    {
        super();
 
        this.AnimatedHeaderValue = new Animated.Value(0);
 
    }  
    /*
    Renders the top bar navigator and home navigation icon
    */
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
          title: 'Service',
        };
      };
    /* 
    render() :
      - Contains a link to Facebook/Ins/Official Site of Clubs
    */
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
          source={require('../../../../assets/images/soar_1.jpg')}
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
                source={require('../../../../assets/images/orgs/alpha-phi-omega.png')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text style={{color: '#FFFFFF'}}>Alpha Phi Omega (ΑΦΩ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('APO_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={() => navigate('APO_ins')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/dsc03633.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text style={{color: '#FFFFFF'}}>Pi Alpha Phi (ΠAΦ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('PAP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={() => navigate('PAP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/SLB_Crest.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text style={{color: '#FFFFFF'}}>Sigma Lambda Beta International Fraternity, Inc. (ΣΛB)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('SLB_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={() => navigate('SLB_ins')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Sigma_Phi_Zeta_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text style={{color: '#FFFFFF'}}>Sigma Phi Zeta (ΣΦZ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={() => navigate('SPZ_ins')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={() => navigate('SPZ_fb')}
              />
            </View>
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

    function APO_home() {
      WebBrowser.openBrowserAsync(
        'http://ucscaphio.wix.com/agn'
      );
    }

function APO_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/agnapo'
      );
    }

function PAP_home() {
      WebBrowser.openBrowserAsync(
        'https://pialphaphi.publishpath.com/'
      );
    }

function PAP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/Pi-Alpha-Phi-Zeta-Chapter-UCSC-98042141510/'
      );
    }

function SLB_home() {
      WebBrowser.openBrowserAsync(
        'https://sites.google.com/site/sigmalambdabetaucsc/'
      );
    }

function SLB_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/santacruzbetas'
      );
    }

function SPZ_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/sigmaphizeta_fraternity'
      );
    }

function SPZ_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/sigmaphizeta/'
      );
    }
    
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
},
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  image_container: {
    paddingLeft: 20
  
  },
  orgs_container: {
    justifyContent: "center",
    fontSize: 10,
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

  emptyContainer: {
    justifyContent: "center",
    backgroundColor: "#4287f5",
    flex: .2,
    borderBottomWidth: 240,
    opacity: 0,
  },
});

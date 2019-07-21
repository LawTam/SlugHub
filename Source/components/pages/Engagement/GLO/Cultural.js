import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated } from 'react-native';
//import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
import { FloatingAction } from "react-native-floating-action";

export class culturalScreen extends React.Component {
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
          title: 'cultural',
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
                source={require('../../../../assets/images/orgs/akappadeltaphi_1.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>alpha Kappa Delta Phi (αKΔΦ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={AKDP_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={AKDP_ins}
              />
            </View>
          </View>


<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/DST2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Delta Sigma Theta Sorority, Inc. (ΔΣΘ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={DST_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="national site"
                color = "#FFFF33"
                onPress={DST_national}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/kappa_zeta_crest.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Kappa Zeta (KZ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={KZ_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={KZ_ins}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/ltaex.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Lambda Theta Alpha {'\n'}Latin Sorority, Inc. (ΛΘA)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={LTA_ins}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={LTA_fb}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/sigma-lambda-gamma.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Lambda Gamma {'\n'}National Sorority, Inc. (ΣΛΓ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={SLG_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={SLG_ins}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Sigma_Omicron_Pi_2018.png')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Omicron Pi (ΣOΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={SOP_ins}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={SOP_fb}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/SIGMA-PI-ALPHA-SORO2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Pi Alpha Sorority, Inc. (ΣΠA)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={SPA_home}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/zphib_2017.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Zeta Phi Beta Sorority, Incorporated (ΖΦΒ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={ZPB_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#FFFF33"
                onPress={ZPB_ins}
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
    

    function AKDP_home() {
      WebBrowser.openBrowserAsync(
        'https://ucscakdphi.wixsite.com/home'
      );
    }
    
    function AKDP_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucsc_akdphi'
      );
    }
    
    function DST_home() {
      WebBrowser.openBrowserAsync(
        'http://www.oocities.org/ucscgreeks/chapters/dst.html'
      );
    }
    
    function DST_national() {
      WebBrowser.openBrowserAsync(
        'https://www.deltasigmatheta.org/'
      );
    }
    
    function KZ_home() {
      WebBrowser.openBrowserAsync(
        'https://kappazetaucsc.wordpress.com/'
      );
    }
    
    function KZ_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/kappazetaucsc'
      );
    }
    
    function LTA_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/lta_epsilonchi'
      );
    }
    
    function LTA_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/LTAEpsilonChi/'
      );
    }
    
    function SLG_home() {
      WebBrowser.openBrowserAsync(
        'https://sigmalambdagamma.com/'
      );
    }
    
    function SLG_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucscgammas'
      );
    }
    
    function SOP_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucsc_sopi'
      );
    }
    
    function SOP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/ucscsopi/'
      );
    }
    
    function SPA_home() {
      WebBrowser.openBrowserAsync(
        'https://sigmapialpha.org/'
      );
    }
    
    function ZPB_home() {
      WebBrowser.openBrowserAsync(
        'http://zphib1920.org/'
      );
    }
    
    function ZPB_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/officialzeta1920'
      );
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
    
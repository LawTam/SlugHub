import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated } from 'react-native';
//import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
import { FloatingAction } from "react-native-floating-action";
  
const Header_Maximum_Height = 0;

export class socialScreen extends React.Component {
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
          title: 'social',
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
                source={require('../../../../assets/images/orgs/gamma-phi-beta.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Gamma Phi Beta (ΓΦΒ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('GPB_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('GPB_fb')}
              />
            </View>
          </View>


<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/theta_shoot_w18-0983_1.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Kappa Alpha Theta (ΚΑΘ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('KAT_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('KAT_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Kappa_Kappa_Gamma_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Kappa Kappa Gamma (KKΓ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('KKG_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('KKG_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/aepi_logo.png')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Alpha Epsilon Pi (AEΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('AEP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('AEP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/ALPHA-PSI-SORO2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Alpha Psi (AΨ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('AP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('AP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/sigma-alpha-epsilon-pi.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Alpha Epsilon Pi (ΣAEΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('SAEP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('SAEP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Sigma_Pi-2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Sigma Pi Fraternity International (ΣΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('SP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('SP_fb')}
              />
            </View>
          </View>

<View style= {styles.orgs_container}>
            <View style = {styles.image_container}>
              <Image
                source={require('../../../../assets/images/orgs/Tau_Kappa_Epsilon_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text>Tau Kappa Epsilon (TKE)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="official site"
                color = "#FFFF33"
                onPress={() => navigate('TKE_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#FFFF33"
                onPress={() => navigate('TKE_fb')}
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
    

    

function GPB_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function GPB_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function KAT_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function KAT_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function KKG_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function KKG_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function AEP_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function AEP_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function AP_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function AP_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function SAEP_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function SAEP_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function SP_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function SP_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function TKE_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function TKE_fb() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
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
    
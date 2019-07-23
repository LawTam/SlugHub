import React , {Component} from 'react';
import {ImageBackground, TouchableHighlight, Button, Image, Text,StyleSheet, View, ScrollView, Animated } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { FloatingAction } from "react-native-floating-action";

export class professionalScreen extends React.Component {
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
          title: 'Professional',
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
                source={require('../../../../assets/images/orgs/Alpha_Kappa_Psi_2018.jpg')}
                style={{height: 100, width: 180}}
                resizeMode="contain"
              />
            </View>
            <Text style={{color: '#FFFFFF'}}>Alpha Kappa Psi (ΑΚΨ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('AKP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
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
            <Text style={{color: '#FFFFFF'}}>Delta Sigma Pi (ΔΣΠ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('DSP_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
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
            <Text style={{color: '#FFFFFF'}}>Kappa Gamma Delta (KΓΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('KGD_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={() => navigate('KGD_ins')}
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
            <Text style={{color: '#FFFFFF'}}>Phi Alpha Delta (ΦAΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={() => navigate('PAD_ins')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
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
            <Text style={{color: '#FFFFFF'}}>Sigma Mu Delta (ΣΜΔ)</Text>
            <View style= {styles.OSButton}>
              <Button
                title="Official Site"
                color = "#3b5998"
                onPress={() => navigate('SMD_home')}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={() => navigate('SMD_fb')}
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


    function AKP_home() {
      WebBrowser.openBrowserAsync(
        'https://www.ucscakpsi.com/'
      );
    }

function AKP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/akpsiucsc'
      );
    }

function DSP_home() {
      WebBrowser.openBrowserAsync(
        'https://www.ucscdsp.org/'
      );
    }

function DSP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/ucscdsp/'
      );
    }

function KGD_home() {
      WebBrowser.openBrowserAsync(
        'https://www.kgdatucsc.org/'
      );
    }

function KGD_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucsckgd'
      );
    }

function PAD_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucsc_pad'
      );
    }

function PAD_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/UCSCPhiAlphaDelta/'
      );
    }

function SMD_home() {
      WebBrowser.openBrowserAsync(
        'http://www.sigmamudelta-gamma.com/'
      );
    }

function SMD_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/gammasmd/'
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

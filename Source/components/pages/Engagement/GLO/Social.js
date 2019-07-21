import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
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

        <View style= {styles.container}>
          
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
                color = "#3b5998"
                onPress={GPB_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={GPB_fb}
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
                color = "#3b5998"
                onPress={KAT_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={KAT_fb}
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
                color = "#3b5998"
                onPress={KKG_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={KKG_ins}
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
                title="Instagram"
                color = "#3b5998"
                onPress={AEP_ins}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={AEP_fb}
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
                color = "#3b5998"
                onPress={AP_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Instagram"
                color = "#3b5998"
                onPress={AP_ins}
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
                color = "#3b5998"
                onPress={SAEP_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={SAEP_fb}
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
                color = "#3b5998"
                onPress={SP_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={SP_fb}
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
                color = "#3b5998"
                onPress={TKE_home}
              />
            </View>

            <View style= {styles.FacebookButton}>
              <Button
                title="Facebook"
                color = "#3b5998"
                onPress={TKE_fb}
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
        'https://www.ucscgammaphibeta.com/'
      );
    }
    
    function GPB_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/ucscgammaphibeta/'
      );
    }
    
    function KAT_home() {
      WebBrowser.openBrowserAsync(
        'https://ucsantacruz.kappaalphatheta.org/'
      );
    }
    
    function KAT_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/UCSCKappaAlphaTheta/'
      );
    }
    
    function KKG_home() {
      WebBrowser.openBrowserAsync(
        'http://ucsc.kappa.org/'
      );
    }
    
    function KKG_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucsckkg'
      );
    }
    
    function AEP_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/aepi.ucsc'
      );
    }
    
    function AEP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/UCSCAEPI/'
      );
    }
    
    function AP_home() {
      WebBrowser.openBrowserAsync(
        'https://alphapsiucsc.wixsite.com/alphapsiucsc'
      );
    }
    
    function AP_ins() {
      WebBrowser.openBrowserAsync(
        'https://www.instagram.com/ucscalphapsi'
      );
    }
    
    function SAEP_home() {
      WebBrowser.openBrowserAsync(
        'http://ucscsaepi.weebly.com/'
      );
    }
    
    function SAEP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/ucscsaepi/'
      );
    }
    
    function SP_home() {
      WebBrowser.openBrowserAsync(
        'http://www.sigmapiucsc.org/'
      );
    }
    
    function SP_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/sigmapiucsc/'
      );
    }
    
    function TKE_home() {
      WebBrowser.openBrowserAsync(
        'http://www.tkeucsc.org/'
      );
    }
    
    function TKE_fb() {
      WebBrowser.openBrowserAsync(
        'https://www.facebook.com/UCSC-Tau-Kappa-Epsilon-Upsilon-Pi-Chapter-196555643715876/'
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

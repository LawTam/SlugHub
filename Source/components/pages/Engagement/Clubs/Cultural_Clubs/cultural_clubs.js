import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export class Cultural_ClubsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Cultural Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style= {styles.container}>
    <ImageBackground 
    source={require('../../../../../assets/images/soar_1.jpg')}
    style={{width: '100%', height: '100%'}}>

     <ScrollView 
         scrollEventThrottle = { 16 }
         contentContainerStyle = {{ paddingTop: 10}}
         onScroll = { Animated.event(
           [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
        )}>


       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ASF_page}>
           <Text
             style={styles.buttonText}>
               A Step Forward
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={AATAT_page}>
           <Text
             style={styles.buttonText}>
               African American Theater Arts Troupe (AATAT)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               African Student Union
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Armenian Student Association (ASA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Asian/Pacific Islander Student Alliance (APISA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Bayanihan (formerly Filipino Student Association)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Black Men's Alliance (BMA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Black Sistas United (BSU)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Black Student Union (formerly African/Black Student Alliance)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Centro Americanos Unidos (CAU)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Chabad Student Group
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Chinese Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Chinese Students & Scholars Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               College Diabetes Network at UCSC
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Cultural Arts & Diversity (CAD)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Engaging Education (e2)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Grupo Folklorico Los Mejicas
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Han Chinese Clothing Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Hermanas Unidas (HaU)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Hmong Student Association (HSA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Indian Student Association (ISA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               International Student Organization (ISO)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Iranian Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Japanese Student Association (JSA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Korean American Student Association (KASA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Kahaani
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Oceania Navigators Empowerment (ONE)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               People of the Islands (POI)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Prism: Student Coalition for Gender, Sex, & Sexuality
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Project RISHI
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               The Russian Club
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Salsita Dance Group
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Sikh Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Society of Asian Scientists and Engineers (SASE)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Student Alliance of North American Indians (SANAI)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Taiwanese Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
         
           <Text
             style={styles.buttonText}>
               Vietnamese Student Association (VSA)
           </Text>
       </TouchableHighlight>


       <View style= {styles.emptyContainer}/>
      </ScrollView>
      </ImageBackground>
      </View>
    );
  }
}

function ASF_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/a-step-forward'
  );
}

function AATAT_page() {
  WebBrowser.openBrowserAsync(
    'http://www.cadrc.org/aatat.html'
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
  emptyContainer: {
    justifyContent: "center",
    backgroundColor: "#4287f5",
    flex: .2,
    borderBottomWidth: 240,
    opacity: 0,
  },
});

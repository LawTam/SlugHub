import React , {Component} from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class AcademicClubsScreen extends React.Component {
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
      title: 'Academic Clubs',
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
         onPress={APAA_page}>
           <Text
             style={styles.buttonText}>
               Aspiring Physician Assistant Association (APAA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ACM_page}>
           <Text
             style={styles.buttonText}>
               Association for Computing Machinery
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ACM_page}>
           <Text
             style={styles.buttonText}>
               Association for Computing Machinery - Women
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={CC_page}>
           <Text
             style={styles.buttonText}>
               Chemistry Club
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={CLE_page}>
           <Text
             style={styles.buttonText}>
               Chican@s and Latin@s Educandose
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={CSSA_page}>
           <Text
             style={styles.buttonText}>
               Cognitive Science Student Association
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={CUSN_page}>
           <Text
             style={styles.buttonText}>
               Community Unified Student Network (CUSN)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Crypto Currency Club
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               Empowering Latino Advancement Through Education and Development (E.L.A.T.E.D.)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}>
               eWomen at UC Santa Cruz
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={GDA_page}>
           <Text
             style={styles.buttonText}>
               Game Design & Art Collaborations (GDA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={GK_page}>
           <Text
             style={styles.buttonText}>
               Golden Key International Honour Society
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={IEEE_page}>
           <Text
             style={styles.buttonText}>
               Institute of Electrical and Electronics Engineers (IEEE)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ISMA_page}>
           <Text
             style={styles.buttonText}>
               Information Systems Management Association (ISMA)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={KAM_page}>
           <Text
             style={styles.buttonText}>
               Kuya Ate Mentorship Program
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={MUN_page}>
           <Text
             style={styles.buttonText}>
               Model United Nations Club (SlugMUN)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={NSBE_page}>
           <Text
             style={styles.buttonText}>
               National Society of Black Engineers (NSBE)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={NSCS_page}>
           <Text
             style={styles.buttonText}>
               National Society of Collegiate Scholars (NSCS)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={PSS_page}>
           <Text
             style={styles.buttonText}>
               Philosophical Slug Society
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={PSS_page}>
           <Text
             style={styles.buttonText}>
               Slugs United by Mathematics (SUM)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={SACN_page}>
           <Text
             style={styles.buttonText}>
               Society for the Advancement of Chicanos and Native Americans in Science (SACNAS)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={SWE_page}>
           <Text
             style={styles.buttonText}>
               Society of Women Engineers (SWESLUGS)
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={TBP_page}>
           <Text
             style={styles.buttonText}>
               Tau Beta Pi Engineering Honors Society
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={Umoja_page}>
           <Text
             style={styles.buttonText}>
               Umoja
           </Text>
       </TouchableHighlight>

       <View style= {styles.emptyContainer}/>
	  </ScrollView>
	  </ImageBackground>
  </View>

    );
  }
}

function AMSA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/groups/2200768448/'
  );
}

function APAA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/ucscapaa'
  );
}

function ACM_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/groups/acmucsc/about/'
  );
}

function CC_page() {
  WebBrowser.openBrowserAsync(
    'https://chemclubucsc.weebly.com/'
  );
}

function CLE_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/chicans-and-latins-educandose-chale'
  );
}

function CSSA_page() {
  WebBrowser.openBrowserAsync(
    'https://ucsccssa.wordpress.com/'
  );
}

function CUSN_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/community-unified-student-network-cusn'
  );
}

function GDA_page() {
  WebBrowser.openBrowserAsync(
    'http://gdacollab.com/'
  );
}

function GK_page() {
  WebBrowser.openBrowserAsync(
    'https://www.goldenkey.org/'
  );
}



function IEEE_page() {
  WebBrowser.openBrowserAsync(
    'https://ieee.soe.ucsc.edu/'
  );
}

function ISMA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.ismaucsc.com/'
  );
}

function KAM_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/kuya-ate-mentorship-program'
  );
}

function MUN_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/slugmun/'
  );
}

function NSBE_page() {
  WebBrowser.openBrowserAsync(
    'https://nsbe.soe.ucsc.edu/home'
  );
}

function NSCS_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/nscs.ucsc/'
  );
}

function PSS_page() {
  WebBrowser.openBrowserAsync(
    'https://philoslugs.wordpress.com/'
  );
}

function SACN_page() {
  WebBrowser.openBrowserAsync(
    'https://www.sacnas.org/'
  );
}

function SWE_page() {
  WebBrowser.openBrowserAsync(
    'https://sweslugs.soe.ucsc.edu/'
  );
}

function TBP_page() {
  WebBrowser.openBrowserAsync(
    'https://tbp.soe.ucsc.edu/'
  );
}

function Umoja_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/umoja'
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
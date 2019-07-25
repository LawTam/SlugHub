import React from 'react';
import { TouchableHighlight, Image, Text, StyleSheet, View, ScrollView, Animated, ImageBackground } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

//exporting the Screen for stack to fetch
export class CafesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      //creating the home button in navigation bar
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Cafes, Restaurants and Coffee Bars',
    };
  };
  /* Structure:
      First add the image background in
      Create buttons for all Cafes
      Buttons will open a browser with the google map navigation to that correspond cafe
  */
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ImageBackground
      source={require('../../../../assets/images/facilities/background.jpg')} 
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
        onPress={bjLocation}>
          <Text
            style={styles.buttonText}>
              Banana Joe's
          </Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={btLocation}>
           <Text
             style={styles.buttonText}>
               Bay Tree Express Store
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={bowlsLocation}>
           <Text
             style={styles.buttonText}>
               Bowls by Café Brasil
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ccLocation}>
           <Text
             style={styles.buttonText}>
               College Eight Cafe
           </Text>
       </TouchableHighlight>
    
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ajLocation}>
           <Text
             style={styles.buttonText}>
               Global Village Cafe by Amazon Juices
           </Text>
       </TouchableHighlight>
       
       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={icLocation}>
           <Text
             style={styles.buttonText}>
               Ivéta Cafe
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={ocLocation}>
           <Text
             style={styles.buttonText}>
               Oakes Cafe
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={pcbLocation}>
           <Text
             style={styles.buttonText}>
               Perk Coffee Bar at Baskin Engineering
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={pceLocation}>
           <Text
             style={styles.buttonText}>
               Perk Coffee Bar at Earth & Marine Sciences
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={pcpLocation}>
           <Text
             style={styles.buttonText}>
               Perk Coffee Bar at Physical Sciences Building
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={scLocation}>
           <Text
             style={styles.buttonText}>
               Stevenson Coffee House
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={tfrLocation}>
           <Text
             style={styles.buttonText}>
               Terra Fresca Restaurant & Coffee Bar
           </Text>
       </TouchableHighlight>

       <TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={vivasLocation}>
           <Text
             style={styles.buttonText}>
               Vivas
           </Text>
       </TouchableHighlight>

       <View style= {styles.emptyContainer}/>

      </ScrollView>
      </ImageBackground>
      </View>

    );
  }
}

//All the browser opening functions
function bjLocation() {
  WebBrowser.openBrowserAsync(
    "https://www.google.com/maps/place/Banana+Joe's/@36.9999953,-122.0566177,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41a744ec8751:0x5618ffd70e784ec1!8m2!3d36.999991!4d-122.054429"
  );
}

function btLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Bay+Tree+Express+Store/@36.9977562,-122.0578346,17z/data=!3m1!4b1!4m5!3m4!1s0x808e4106417c3bcd:0xfd7c5015c0a14c9d!8m2!3d36.9977519!4d-122.0556459'
  );
}

function bowlsLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Bowls+by+Cafe+Brasil/@36.9942987,-122.0679696,17z/data=!3m1!4b1!4m5!3m4!1s0x808e419e8fd4adf1:0x6ba3a9d70d648453!8m2!3d36.9942944!4d-122.0657809'
  );
}

function ccLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/College+Eight+Caf%C3%A9/@36.9916323,-122.0665707,17z/data=!3m1!4b1!4m5!3m4!1s0x808e419f6af5cddf:0x2b5721a1b613ecf1!8m2!3d36.991628!4d-122.064382'
  );
}

function icLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Cafe+Iveta/@36.9971388,-122.0638868,15.33z/data=!4m8!1m2!2m1!1sCafe+Iv%C3%A9ta!3m4!1s0x0:0x9192f1432c33695a!8m2!3d36.9981785!4d-122.0557988'
  );
}

function ajLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Global+Village+Cafe/@36.9960853,-122.0615444,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41a1a3441cbb:0xf4dbbd591361b5ef!8m2!3d36.996081!4d-122.0593557'
  );
}

function ocLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Oakes+Caf%C3%A9/@36.9904276,-122.0665349,17z/data=!4m8!1m2!2m1!1sOakes+Cafe!3m4!1s0x808e419837255555:0xfc36f7541de492fd!8m2!3d36.9892275!4d-122.0633029'
  );
}

function pcbLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Perk+Coffee+Bar+at+Baskin+Engineering/@37.0004653,-122.0652057,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41751d637223:0x90f1b98fcf99d3d3!8m2!3d37.000461!4d-122.063017'
  );
}

function pceLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Perk+Coffee+Bar+at+Earth+%26+Marine+Sciences/@36.997952,-122.0621325,17z/data=!3m1!4b1!4m5!3m4!1s0x808e417548570147:0xc7b4bff362287fef!8m2!3d36.9979477!4d-122.0599438'
  );
}

function pcpLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Perk+Coffee+Bar+at+Physical+Sciences/@36.9998202,-122.0621527,19.17z/data=!4m8!1m2!2m1!1sPerk+Coffee+Bar+at+Physical+Sciences+Building!3m4!1s0x0:0xab5011cc7fd8b660!8m2!3d36.9997512!4d-122.0616388'
  );
}

function scLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Stevenson+Coffee+House/@36.9973241,-122.0544882,17z/data=!3m1!4b1!4m5!3m4!1s0x808e41a661ae57d3:0xb2fb7545a81ffc30!8m2!3d36.9973198!4d-122.0522995'
  );
}

function tfrLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Terra+Fresca+Coffee+Bar/@37.0009913,-122.0597747,17z/data=!3m1!4b1!4m5!3m4!1s0x808e410a5c4b91c1:0xb1b03fb28cbccb4a!8m2!3d37.000987!4d-122.057586'
  );
}

function vivasLocation() {
  WebBrowser.openBrowserAsync(
    'https://www.google.com/maps/place/Vivas+Mexican+Food/@36.999819,-122.0550329,17.67z/data=!4m8!1m2!2m1!1sVivas+Mexican+Food!3m4!1s0x0:0x83f83bd3222decf!8m2!3d37.0001621!4d-122.0533633'
  );
}


//styles for the page container
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  //style for all buttons
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
  //style for text inside buttons
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //create the empty space at the bottom half of our page
  emptyContainer: {
    justifyContent: "center",
    backgroundColor: "#4287f5",
    flex: .2,
    borderBottomWidth: 240,
    opacity: 0,
  },
});
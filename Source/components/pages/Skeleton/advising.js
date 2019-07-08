import React , {Component} from '../../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

export class AdvisingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Advising',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (


      <View style= {styles.screen_container}>

        <View style= {styles.jbe_container}>

              <TouchableHighlight onPress={jbe_home}>
              <Image
              source={require('../../../assets/images/jbe_logo.png')}
              style={{height: 100, width: 200}}
              resizeMode="contain"
              />
              </TouchableHighlight>

              <View style= {styles.majorButton}>
              <Button
              title="Majors"
              color = "#008000"
              onPress={() => navigate('JBE_Majors')}
              />
              </View>

              <View style= {styles.minorButton}>
              <Button
              title="Minors"
              color = "#800080"
              onPress={() => navigate('JBE_Minors')}
              />
              </View>

        </View>

    <View style= {styles.container}>
          <TouchableHighlight onPress={jbe_home}>
            <Image
            source={require('../../../assets/images/jbe_logo.png')}
            style={{height: 100, width: 200}}
            resizeMode="contain"
            />
          </TouchableHighlight>


          <View style= {styles.majorButton}>
            <Button
            title="Majors"
            color = "#008000"
            onPress={() => navigate('JBE_Majors')}
            />
          </View>




        <View style= {styles.pbsci_container}>

            <TouchableHighlight onPress={pbsci_home}>
            <Image
            source={require('../../../assets/images/pbsci_logo.png')}
            style={{height: 83, width: 200}}
            resizeMode="contain"
            />
            </TouchableHighlight>

            <View style= {styles.pbsci_majorButton}>
            <Button
            title="PBSCI Majors"
            color = "#008000"
            //onPress={() => navigate('JBE_Majors')}
            />
            </View>

            <View style= {styles.pbsci_minorButton}>
            <Button
            title="PBSCI Minors"
            color = "#800080"
            //onPress={() => navigate('JBE_Minors')}
            />
            </View>

        </View>


            <View style= {styles.ss_container}>

                <TouchableHighlight onPress={ss_home}>
                <Image
                source={require('../../../assets/images/ss_logo.png')}
                style={{height: 82, width: 200}}
                resizeMode="contain"
                />
                </TouchableHighlight>

                <View style= {styles.majorButton}>
                <Button
                title="SS Majors"
                color = "#008000"
                //onPress={() => navigate('JBE_Majors')}
                />
                </View>

                <View style= {styles.minorButton}>
                <Button
                title="SS Minors"
                color = "#800080"
                //onPress={() => navigate('JBE_Minors')}
                />
                </View>

            </View>



            <View style= {styles.hum_container}>

                    <TouchableHighlight onPress={hum_home}>
                    <Image
                    source={require('../../../assets/images/hum_logo.png')}
                    style={{height: 100, width: 200}}
                    resizeMode="contain"
                    />
                    </TouchableHighlight>

                    <View style= {styles.majorButton}>
                    <Button
                    title="HUM Majors"
                    color = "#008000"
                    //onPress={() => navigate('JBE_Majors')}
                    />
                    </View>

                    <View style= {styles.minorButton}>
                    <Button
                    title="HUM Minors"
                    color = "#800080"
                    //onPress={() => navigate('JBE_Minors')}
                    />
                    </View>

            </View>


            <View style= {styles.art_container}>

                  <TouchableHighlight onPress={art_home}>
                  <Image
                  source={require('../../../assets/images/art_logo.png')}
                  style={{height: 78, width: 200}}
                  resizeMode="contain"
                  />
                  </TouchableHighlight>

                  <View style= {styles.majorButton}>
                  <Button
                  title="ART Majors"
                  color = "#008000"
                  onPress={() => navigate('JBE_Majors')}
                  />
                  </View>

                  <View style= {styles.minorButton}>
                  <Button
                  title="ART Minors"
                  color = "#800080"
                  onPress={() => navigate('JBE_Minors')}
                  />
                  </View>


            </View>


      </View>

          <View style= {styles.minorButton}>
            <Button
            title="Minors"
            color = "#800080"
            onPress={() => navigate('JBE_Minors')}
            />
          </View>

      </View>


    );
  }
}

function jbe_home() {
  WebBrowser.openBrowserAsync(
    'https://www.soe.ucsc.edu/'
  );
}

function pbsci_home() {
  WebBrowser.openBrowserAsync(
    'https://pbsci.ucsc.edu/index.html'
  );
}

function ss_home() {
  WebBrowser.openBrowserAsync(
    'https://humanities.ucsc.edu/'
  );
}

function hum_home() {
  WebBrowser.openBrowserAsync(
    'https://socialsciences.ucsc.edu/'
  );
}

function art_home() {
  WebBrowser.openBrowserAsync(
    'http://arts.ucsc.edu/'
  );
}

const styles = StyleSheet.create({


  screen_container: {
    backgroundColor: "#4287f5",
    flex: 1
  },

  jbe_container: {
    justifyContent: "center",
    fontSize: 10,
    padding: 10,
    paddingTop: 10,
    paddingRight: 160,
    paddingBottom: 10,
    backgroundColor: "#D8BFD8",
    flex: .2
  },

  pbsci_container: {
    justifyContent: "center",
    fontSize: 10,
    padding: 10,
    paddingTop: 10,
    paddingRight: 160,
    paddingBottom: 10,
    backgroundColor: "#000000",
    flex: .2
  },

  ss_container: {
    justifyContent: "center",
    fontSize: 10,
    padding: 10,
    paddingTop: 10,
    paddingRight: 160,
    paddingBottom: 10,
    backgroundColor: "#228B22",
    flex: .2
  },

  hum_container: {
    justifyContent: "center",
    fontSize: 10,
    padding: 10,
    paddingTop: 10,
    paddingRight: 160,
    paddingBottom: 10,
    backgroundColor: "#FFA500",
    flex: .2
  },

  art_container: {
    justifyContent: "center",
    fontSize: 10,
    padding: 10,
    paddingTop: 10,
    paddingRight: 160,
    paddingBottom: 10,
    backgroundColor: "#40E0D0",
    flex: .2
  },


  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  majorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '62.5%',
    right: 10,
    width: 150,
  },
  minorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '22%',
    right: 10,
    width: 150,
  },

  pbsci_majorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '62.5%',
    right: 10,
    width: 150,
  },
  pbsci_minorButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'gold',
    position: 'absolute',
    bottom: '22%',
    right: 10,
    width: 150,
  },


});

    container: {
      justifyContent: "center",
      fontSize: 10,
      padding: 10,
      paddingTop: 10,
      paddingRight: 160,
      paddingBottom: 10,
      backgroundColor: "#4287f5",
      flex: 0.20
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    majorButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'gold',
      position: 'absolute',
      bottom: 73,
      right: 10,
      width: 150,
    },
    minorButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'gold',
      position: 'absolute',
      bottom: 27,
      right: 10,
      width: 150,
    },
  });

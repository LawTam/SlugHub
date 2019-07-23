import React from 'react';
import { ImageBackground, TouchableHighlight, ScrollView, Image, Text, StyleSheet, View } from 'react-native';

export class BEScreen extends React.Component {
  /*
    Renders the top bar navigator and home navigation icon
  */
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
          <Image
          source={require('../../../../../../assets/images/home_icon.png')}
          style={{height: 35, width: 35, margin: 10}}
          resizeMode="contain"
          />
        </TouchableHighlight>
      ),
      title: 'Bioengineering',
    };
  };
  /* 
    render() :
      - Contains pages to bioengineering
  */
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
          <ImageBackground 
            source={require('../../../../../../assets/images/JBE_back_temp.png')}
            style={{width: '100%', height: '100%'}}>
          <View style= {styles.container}>
          <ScrollView>
            <TouchableHighlight
              underlayColor= 'transparent'
              style={styles.buttonContainer}
              onPress={() => navigate('BioInfo_Major')}>
                <Text
                  style={styles.buttonText}>
                    Bioengineering: Bioinformatics B.S.
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor= 'transparent'
              style={styles.buttonContainer}
              onPress={() => navigate('BE_AT')}>
                <Text
                  style={styles.buttonText}>
                    Bioengineering: Assistive Tech (Motor) Concentration B.S.
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor= 'transparent'
              style={styles.buttonContainer}
              onPress={() => navigate('BE_Elec')}>
                <Text
                  style={styles.buttonText}>
                    Bioengineering: Bioelectronics Concentration B.S.
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor= 'transparent'
              style={styles.buttonContainer}
              onPress={() => navigate('BE_Biomole')}>
                <Text
                  style={styles.buttonText}>
                    Bioengineering: Biomolecular Concentration B.S.
                </Text>
            </TouchableHighlight>

        </ScrollView>
        </View>
        </ImageBackground>
      </View>
    );
  }
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

import React from 'react';
import { TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class CE_MajorScreen extends React.Component {
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
		title: 'Computer Engineering',
    	};
	};
  render() {
    return (
    <View style= {styles.container}>
        <Button
          title="Curriculum Chart"
          color = "#e6f542"
          onPress={ceMajorCurriculum}
        />

    </View>

    );
  }
}

function ceMajorCurriculum() {
    WebBrowser.openBrowserAsync(
      'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-07/CMPE_18-19%20%281%29.pdf'
    );
  }

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 30,
      padding: 60,
      backgroundColor: "#4287f5",
      flex: 1
    },
  });

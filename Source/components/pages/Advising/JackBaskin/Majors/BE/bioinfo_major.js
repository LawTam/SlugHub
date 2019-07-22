import React from 'react';
import { TouchableHighlight, Button, Image, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export class BioInfo_MajorScreen extends React.Component {
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
		title: 'Bioinformatics',
    	};
	};
  render() {
    return (
    <View style= {styles.container}>
        <Button
        	title="Curriculum Chart"
        	color = "#e6f542"
        	onPress={bioinfoMajorCurriculum}
        />

    </View>

    );
  }
}

function bioinfoMajorCurriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-01/BINF_17-18%2520%25281%2529.pdf'
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

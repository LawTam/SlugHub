import React , {Component} from '../../../../node_modules/react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
import ScrollPicker from '../../../../node_modules/react-native-wheel-scroll-picker';
// npm install styled-components
// npm install react-native-wheel-scroll-picker --save
// npm i react-native-wheel-picker --save
import Picker from '../../../../node_modules/react-native-wheel-picker'

var PickerItem = Picker.Item;
var dict = new Map();
dict.set("CMPS 5J", "CMPS 5J: Intro to Programming");
dict.set("CMPS 12A", "CMPS 12A/L: Accelerated Programming");
dict.set("CMPS 12B", "CMPS 12B/M: Intro to Data Structures");
dict.set("CMPS 101", "CMPS 101: Algorithms and Abstract Data Types");

export class CS_BSScreen extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			selectedItem : 0,
			itemList: ["CMPS 5J", "CMPS 12A", "CMPS 12B", "CMPS 101"]
		};
	}

	onPickerSelect (index) {
		this.setState({
			selectedItem: index,
		})
	}

	onAddItem = () => {
    console.log(this.state.itemList);
    var key = this.state.itemList[this.state.selectedItem]
    console.log(key);
    console.log(dict.get(key));
	}

	select = () => {
		console.log(this.state.itemList);
		var key = this.state.itemList[this.state.selectedItem]
		console.log(key);
		return this.dict.key[this.setState.selectedItem];
	}

	get_SOE_Webpage(class_key) {
		//console.log("JBE webpage for: ", class_key)
		classKey = class_key.replace(/\s/g, '');	// remove spaces
		link = "https://courses.soe.ucsc.edu/courses/" + classKey
		//console.log(link)

		WebBrowser.openBrowserAsync(
			link
		);
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Computer Science B.S. Courses
				</Text>
				<Picker style={{width: 150, height: 180}}
          			selectedValue={this.state.selectedItem}
					itemStyle={{color:"white", fontSize:26}}
					onValueChange={(index) => this.onPickerSelect(index)}>
					{this.state.itemList.map((value, i) => (
						<PickerItem label={value} value={i} key={"money"+value}/>
					))}
				</Picker>
				<Text style={{margin: 20, color: '#ffffff'}}>
          			{dict.get(this.state.itemList[this.state.selectedItem])}
				</Text>

				<Text style={{margin: 20, color: '#ffffff'}}
					onPress={() => this.get_SOE_Webpage(this.state.itemList[this.state.selectedItem])}>
					Search for this class!
				</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1962dd',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
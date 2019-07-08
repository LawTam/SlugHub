import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
//import ScrollPicker from '../../../../../node_modules/react-native-wheel-scroll-picker';
// npm install styled-components
// npm install react-native-wheel-scroll-picker --save
// npm i react-native-wheel-picker --save
import Picker from '../../../../node_modules/react-native-wheel-picker'

var PickerItem = Picker.Item;
var dict = {
	"CMPS 5J": "CMPS 5J: Intro to Programming",
	"CMPS 12A/L": "CMPS 12A/L: Accelerated Programming",
	"CMPS 12B/L": "CMPS 12B/L: Intro to Data Structures",
	"CMPS 101": "CMPS 101: Algorithms and Abstract Data Types",
}

export class CS_BSScreen extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			selectedIndex : 0,
			itemList: ['CMPS 5J', 'CMPS 12A/L', 'CMPS 12B/L', 'CMPS 101', ]
		};
	}

	onPickerSelect (index) {
		this.setState({
			selectedIndex: index,
		})
	}

	onAddItem = () => {
		console.log(this.state.itemList);
		var key = this.state.itemList[this.state.selectedItem]
		console.log(key);
		console.log(this.classes_dictionary[0]);
	}

	select = () => {
		console.log(this.state.itemList);
		var key = this.state.itemList[this.state.selectedItem]
		console.log(key);
		return this.classes_dictionary.key[0];
	}

	direct_url = () => {

	}

	render () {
		return (
			<View style={styles.container}>

				<Text style={styles.welcome}>
					Computer Science Course Offerings
				</Text>

				<Picker style={{width: 150, height: 180}}
          			selectedClass = {this.state.selectedIndex}
					itemStyle = {{color:"white", fontSize:26}}
					onValueChange = {(selectedClass) => this.onPickerSelect(selectedClass)}>

					{this.state.itemList.map((value, i) => (
						<PickerItem label={value} value={i} key={value}/>
					))}
				</Picker>

				<Text style={{margin: 20, color: '#ffffff'}} dictionary = {dict}>
					{
						this.state.itemList.map((value, i) => (
						dict[this.state.selectedItem]))
					}
				</Text>

				<Text style={{margin: 20, color: '#ffffff'}}
						onPress={this.onAddItem}>
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
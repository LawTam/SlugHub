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
var PickerItem2 = Picker.Item;
var dict = new Map();
dict.set("CMPS 5J", "CMPS 5J: Intro to Programming");
dict.set("CMPS 12A/L", "CMPS 12A/L: Accelerated Programming");
dict.set("CMPS 12B/M", "CMPS 12B/M: Intro to Data Structures");
dict.set("CMPS 101", "CMPS 101: Algorithms and Abstract Data Types");
dict.set("CMPS 111", "CMPS 111: Introduction to Operating Systems");

export class CS_BSScreen extends React.Component {
  static navigationOptions = {
    title: 'Computer Science B.S.',
  };
  constructor(props) {
		super(props);
		this.state = {
      selectedItem : 0,
      itemList: ["CMPS 5J", "CMPS 12A/L", "CMPS 12B/M", "CMPS 101", '黄忠', '马超', '魏延', '诸葛亮'],
      selectedItem1: 0,
      itemList1: ["CMPS 101", "CMPS 111"]
    };
    this.state2 = {
     
		};
	}

	onPickerSelect (index) {
		this.setState({
			selectedItem: index,
		})
  } 
  onPickerSelect2 (index) {
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

  onAddItem2 = () => {
    console.log(this.state.itemList1);
    var key = this.state.itemList1[this.state.selectedItem1]
    console.log(key);
    console.log(dict.get(key));
  }

	render () {
    const {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				{/* <Text style={styles.welcome}>
					Welcome to React Native!
        </Text> */}

        <Button
        title="Curriculum Chart"
        style= {styles.button2}
        color = "#e6f542"
        onPress={cs_bs_curriculum}
        />

        <View style={styles.lower_div_container}>
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

				<Text style={{margin: 10, color: '#ffffff'}}
						onPress={this.onAddItem}>
			Search for this class!
				</Text>
        </View>

{ 
        <View style={styles.upper_div_container}>
				<Picker style={{width: 150, height: 180}}
          selectedValue={this.state.selectedItem1}
					itemStyle={{color:"white", fontSize:26}}
					onValueChange={(index) => this.onPickerSelect(index)}>
						{this.state.itemList1.map((value, i) => (
							<PickerItem label={value} value={i} key={"money"+value}/>
						))}
				</Picker>
				<Text style={{margin: 20, color: '#ffffff'}}>
          {dict.get(this.state.itemList1[this.state.selectedItem1])}
				</Text>

				<Text style={{margin: 20, color: '#ffffff'}}
						onPress={this.onAddItem2}>
			Search2 for this class!
				</Text>
        </View> }
			</View>
		);
	}

}

function cs_bs_curriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-07/CS_BS_18-19.pdf'
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#1962dd',
  },
  lower_div_container: {
    top: 0,
    left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1962dd',
  },
  upper_div_container: {
    top: 0,
    left: 0,
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
  button2: {
    justifyContent: "center",
    flex: 0.3,
    top: -120,
    left: 120,
    height:70, 
    width:180,
  },
});
import React , {Component} from '../../../../../node_modules/react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';
//import ScrollPicker from '../../../../../node_modules/react-native-wheel-scroll-picker';
// npm install styled-components
// npm install react-native-wheel-scroll-picker --save
// npm i react-native-wheel-picker --save
import Picker from '../../../../../node_modules/react-native-wheel-picker'

var PickerItem = Picker.Item;
var PickerItem2 = Picker.Item;
var dictionary = new Map();
var dictionary2 = new Map();

export class CS_BSScreen extends React.Component {
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
		title: 'Computer Science B.S.',
    	};
	};


  	constructor(props) {
		super(props);
		this.state = {
			selectedItem : 0,
			itemList: [],
			selectedItem1: 0,
			itemList1: [],
			data:  null
		};
	}

	onPickerSelect (index) {
		this.setState({
			selectedItem: index,
		})
	}

	onPickerSelect1 (index) {
			this.setState({
				selectedItem1: index,
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
    const {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>

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
							{dictionary.get(this.state.itemList[this.state.selectedItem])}
						</Text>

						<Button title="Search" type="solid" style={{margin: 20, color: '#000000'}}
							onPress={() => this.get_SOE_Webpage(this.state.itemList[this.state.selectedItem])}>!
						</Button>
				</View>


				<View style={styles.upper_div_container}>
						<Picker style={{width: 150, height: 180}}
							selectedValue={this.state.selectedItem1}
							itemStyle={{color:"white", fontSize:26}}
							onValueChange={(index) => this.onPickerSelect1(index)}>
							{this.state.itemList1.map((value, i) => (
								<PickerItem label={value} value={i} key={"money"+value}/>
							))}
						</Picker>

						<Text style={{margin: 20, color: '#ffffff'}}>
							{dictionary2.get(this.state.itemList1[this.state.selectedItem1])}
						</Text>

						<Button title="Search" type="solid" style={{margin: 20, color: '#000000'}}
							onPress={() => this.get_SOE_Webpage(this.state.itemList1[this.state.selectedItem1])}>
						</Button>
        		</View>

			</View>
		);
	}

	componentDidMount = () => {
		fetch('https://people.ucsc.edu/~nmarkenz/Webscraping/lowerdiv_cse_classes.json', {
		   method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
		   console.log(responseJson);
		   this.create_dict(responseJson,dictionary,0)
		   //console.log(dictionary)
		   //dictionary = clean_up_dict(dictionary)
		   this.setState({
			  data: responseJson
		   })
		})
		.catch((error) => {
		   console.error(error);
		});
		fetch('https://people.ucsc.edu/~nmarkenz/Webscraping/upperdiv_cse_classes.json', {
		   method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
		   console.log(responseJson);
		   this.create_dict(responseJson,dictionary2,1)
		   //console.log(dictionary)
		   //dictionary = clean_up_dict(dictionary)
		   this.setState({
			  data: responseJson
		   })
		})
		.catch((error) => {
		   console.error(error);
		});
	 }
	 create_dict(result,dict,upper) {
		console.log(typeof result);
		console.log(result);
		console.log(typeof dict);
		   str_dict = JSON.stringify(result);
		   //console.log(typeof str_dict);
		  // console.log(str_dict);
		   //console.log(new_dict.get("CMPS 5J"));
		  var res = str_dict.split(" ,");
		  // console.log(res);
		  //var str_class = res[0].split(" \" ");
		   //console.log(str_class);
		  var str2 = res[0].match(/[^\s"']+|"([^"]*)"/gmi)
		 // console.log("------------------------");
		  //console.log(str2);
		 // console.log(str2[1]);
		  var start = 1
		  var end = 3
		  //console.log(Math.floor(str2.length/4));
		  var num_items = Math.floor((str2.length)/4)
		  console.log("---------------------------")
		  console.log(str2[start]);
		  var key = str2[start].split("\"");
		  console.log(key)
		  console.log(key[1])
		  console.log("---------------------------")
		  for(var i = 0; i < num_items; i++) 
	   {
		  var key = str2[start].split("\"");
		  var val = str2[end].split("\"");
		  dict.set(key[1], val[1]);
		  //console.log(dict.get(str2[start]));
		  start += 4;
		  end += 4;
	   }
	   console.log(dict);
	   console.log("KILL ME");
	   console.log(dict.get("\"CSE99\""))
	   iterator1 = dict.keys()
	   console.log(this.state.itemList1)
	   if (upper == 0)
			   myList = this.state.itemList
		else
		myList = this.state.itemList1
	   for (var i = 0; i < dict.size;i++)
	   {
		   myList.push(iterator1.next().value)
	   }
	   console.log(iterator1.next().value)
	   //this.state.itemList = 
	   console.log(typeof dict)
	   for (key in dict)
			   console.log(key);
			   
	   }
	   
}

function cs_bs_curriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-07/CS_BS_18-19.pdf'
  );
}



function clean_up_dict(dictionary) {
	for (var key in dictionary) {
		// check if the property/key is defined in the object itself, not in parent
		if (dictionary.hasOwnProperty(key)) {           
			console.log(key, dictionary[key]);
		}
	}
	return dictionary


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

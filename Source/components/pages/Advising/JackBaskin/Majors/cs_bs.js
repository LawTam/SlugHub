import React , {Component} from '../../../../../node_modules/react';
import { ImageBackground, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
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
				
				<ImageBackground 
      source={require('../../../../../assets/images/compsci_pic.png')}
      style={{width: '100%', height: '100%'}}>
		  		
				<TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.buttonContainer}
         onPress={cs_bs_curriculum}>
           <Text
             style={styles.buttonText}>
               Curriculum Chart
           </Text>
       </TouchableHighlight>

				<View style={styles.lower_div_container}>
						<Picker style={{width: 150, height: 180}} itemStyle={{height: 180}}
							selectedValue={this.state.selectedItem}
							itemStyle={{color:"white", fontSize:26}}
							onValueChange={(index) => this.onPickerSelect(index)}>
							{this.state.itemList.map((value, i) => (
								<PickerItem label={value} value={i} key={"money"+value}/>
							))}
						</Picker>

						<Text style={{margin: 15, color: '#ffffff',flexWrap: 'wrap',flexDirection:'row',flexShrink: 0}}>
							{dictionary.get(this.state.itemList[this.state.selectedItem])}
						</Text>

						<TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.search_buttonContainer}
         onPress={() => this.get_SOE_Webpage(this.state.itemList[this.state.selectedItem])}>
           <Text
             style={styles.buttonText}>
               Search
           </Text>
       </TouchableHighlight>
				</View>


				<View style={styles.upper_div_container}>
						<Picker style={{width: 150, height: 180}} itemStyle={{height: 180}}
							selectedValue={this.state.selectedItem1}
							itemStyle={{color:"white", fontSize:26}}
							onValueChange={(index) => this.onPickerSelect1(index)}>
							{this.state.itemList1.map((value, i) => (
								<PickerItem label={value} value={i} key={"money"+value}/>
							))}
						</Picker>

						<Text style={{margin: 15, color: '#ffffff'}}>
							{dictionary2.get(this.state.itemList1[this.state.selectedItem1])}
						</Text>

						<TouchableHighlight
        underlayColor= 'transparent' 
         style={styles.search_buttonContainer}
         onPress={() => this.get_SOE_Webpage(this.state.itemList1[this.state.selectedItem1])}>
           <Text
             style={styles.buttonText}>
               Search
           </Text>
       </TouchableHighlight>
        		</View>
				</ImageBackground>						
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
		   str_dict = JSON.stringify(result);
		  var res = str_dict.split(" ,");
		  var str2 = res[0].match(/[^\s"']+|"([^"]*)"/gmi)
		  var start = 1
		  var end = 3
		  var num_items = Math.floor((str2.length)/4)
		  var key = str2[start].split("\"");
		  for(var i = 0; i < num_items; i++) 
	   {
		  var key = str2[start].split("\"");
		  var val = str2[end].split("\"");
		  dict.set(key[1], val[1]);
		  start += 4;
		  end += 4;
	   }

	   iterator1 = dict.keys()
	   if (upper == 0)
			   myList = this.state.itemList
		else
		myList = this.state.itemList1
	   for (var i = 0; i < dict.size;i++)
	   {
		   myList.push(iterator1.next().value)
	   }
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
  },
  lower_div_container: {
	 // flex:1,
    top: 0,
	left: 0,
		justifyContent: 'center',

		//backgroundColor: '#1962dd',
  },
  upper_div_container: {
    top: 0,
    left: 0,
		justifyContent: 'center',
		//alignItems: 'center',
		//backgroundColor: '#1962dd',
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
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 0,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 5,
    marginBottom: 0,
    paddingTop: 15,
    paddingBottom: 10,
},
search_buttonContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 0,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
},
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

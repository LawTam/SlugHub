import React from 'react';
import { ImageBackground, TouchableHighlight, Image, Text, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Picker from '../../../../../node_modules/react-native-wheel-picker'

var PickerItem = Picker.Item;	// Creates the wheel picker that the dictionaries will be using
var lowerDivDict = new Map();	// Creates the lowerDiv dictionary for storing lowerDiv courses
var upperDivDict = new Map();	// Creates the upperDiv dictionary for storing upperDiv courses

export class CS_BSScreen extends React.Component {

	/*
		Functionality: Establishes the top right home button on the top of the screen
	*/
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

	/*
		Functionality: Establishes state as the two wheel pickers and their components.
			selectedLowerDiv: denotes the current index of the selected Lower Div course
			lowerDivList: denotes the list of Lower Div courses (which is filled by the
				function createDivList
			selectedUpperDiv: denotes the current index of the selected Upper Div course
			upperDivList: denotes the list of Upper Div courses (which is filled by the
				function createDivList
			data: stores the responseJSON (the dictionary in JSON format) in case it 
				is needed for other functionality in the future
			
	*/
  	constructor(props) {
		super(props);
		this.state = {
			selectedLowerDiv : 0,
			lowerDivList: [],
			selectedUpperDiv: 0,
			upperDivList: [],
			data:  null
		};
	}
	/*
		Functionality: Both onPickerSelect functions change the index of a wheel to
			another index
	*/
	onPickerSelectLowerDiv (index) {
		this.setState({
			selectedLowerDiv: index,
		})
	}

	onPickerSelectUpperDiv (index) {
			this.setState({
				selectedUpperDiv: index,
			})
		}

	/*
		Functionality: Receives the class key as input (Ex. "CSE3") and parses
			the url using the class key in order to generate the correct link to open 
	*/
	getSOEWebpage(classKey) {
		classKey = classKey.replace(/\s/g, '');	// remove spaces
		link = "https://courses.soe.ucsc.edu/courses/" + classKey
		WebBrowser.openBrowserAsync(
			link
		);
	}
	/*
		Functionality: Displays the curriculum chart button, the Lower Div courses wheel,
		Upper Div courses wheel, the image background, as well as the search button for 
		each wheel			
	*/
	render () {
		return (
			<View style={styles.container}>
				
				<ImageBackground 
      				source={require('../../../../../assets/images/compsci_pic.png')}
      				style={{width: '100%', height: '100%'}}>
		  		
					<TouchableHighlight
        				underlayColor= 'transparent' 
         				style={styles.buttonContainer}
         				onPress={csBSCurriculum}>
          				<Text
             				style={styles.buttonText}>
               				Curriculum Chart
           				</Text>
       				</TouchableHighlight>

					<TouchableHighlight
					underlayColor= 'transparent' 
					style={styles.buttonContainer}
					onPress={cseChanges}>
						<Text
							style={styles.buttonText}>
							CMPS -> CSE Changes
						</Text>
					</TouchableHighlight>

					<View style={styles.lowerDivContainer}>

						<Picker style={{width: 150, height: 180}} itemStyle={{height: 180}}
							selectedValue={this.state.selectedLowerDiv}
							itemStyle={{color:"white", fontSize:26}}
							onValueChange={(index) => this.onPickerSelectLowerDiv(index)}>
							{this.state.lowerDivList.map((value, i) => (
								<PickerItem label={value} value={i} key={"money"+value}/>
							))}
						</Picker>

						<Text style={{margin: 15, color: '#ffffff',flexWrap: 'wrap',flexDirection:'row',flexShrink: 0}}>
							{lowerDivDict.get(this.state.lowerDivList[this.state.selectedLowerDiv])}
						</Text>

						<TouchableHighlight
        					underlayColor= 'transparent' 
         					style={styles.searchButtonContainer}
         					onPress={() => this.getSOEWebpage(this.state.lowerDivList[this.state.selectedLowerDiv])}>
           					<Text
             					style={styles.buttonText}>
               					Search
           					</Text>
       					</TouchableHighlight>

					</View>


					<View style={styles.upperDivContainer}>

						<Picker style={{width: 150, height: 180}} itemStyle={{height: 180}}
							selectedValue={this.state.selectedUpperDiv}
							itemStyle={{color:"white", fontSize:26}}
							onValueChange={(index) => this.onPickerSelectUpperDiv(index)}>
							{this.state.upperDivList.map((value, i) => (
								<PickerItem label={value} value={i} key={"money"+value}/>
							))}
						</Picker>

						<Text style={{margin: 15, color: '#ffffff'}}>
							{upperDivDict.get(this.state.upperDivList[this.state.selectedUpperDiv])}
						</Text>

						<TouchableHighlight
        					underlayColor= 'transparent' 
         					style={styles.searchButtonContainer}
         					onPress={() => this.getSOEWebpage(this.state.upperDivList[this.state.selectedUpperDiv])}>
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
	/*
		Functionality: Grabs the JSON dictionary from the server using the appropriate URL
	*/
	componentDidMount = () => {
		fetch('https://people.ucsc.edu/~nmarkenz/Webscraping/lowerdiv_cse_classes.json', {
		   method: 'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
		   this.createDict(responseJson,lowerDivDict,0)	// Creates the javascript dictionary from JSON
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
		   this.createDict(responseJson,upperDivDict,1) // Creates the javascript dictionary from JSON
		   this.setState({
			  data: responseJson
		   })
		})
		.catch((error) => {
		   console.error(error);
		});
	 }

	 /*
		Functionality: Parses the JSON dictionary received from the server and uses some logic
	 		to recreate the dictionary in Javascript
	 */
	 createDict(result,dict,upper) {
		  str_dict = JSON.stringify(result);
		  var res = str_dict.split(" ,");	// Split by commas
		  var str2 = res[0].match(/[^\s"']+|"([^"]*)"/gmi)	// Split by quotes (" ")
		  /*
				At this point the excerpt of the list looks like this
				[0] = "{"
				[1] = "\"CSE3\""  <------- Class Prefix
				[2] = ":"
				[3] = "\"CSE3: Personal Computer Concepts: Software and Hardware \"" <-------- Class Title
				[4] = "{"
				[5] = "\"CSE5J\"" <------- Class Prefix
				.........
		  */
		  var start = 1		// Initial index of first class prefix
		  var end = 3		// Initial index of first class title
		  var num_items = Math.floor((str2.length)/4)	// Logic to account amount of (prefix,title) pairs
		  /*
				Generates the dictionary by establashing the proper key value pairs by splitting the "\"
		  */
		  for(var i = 0; i < num_items; i++) 
		  	{
		  		var key = str2[start].split("\"");	// Class Prefix
		  		var val = str2[end].split("\"");	// Class Title
		  		dict.set(key[1], val[1]);			// Establishing entry in dictionary
		  		start += 4;							// Increment by 4 to get next pair
		  		end += 4;	
	   		}
		  this.createDivList(dict,upper);	   		// Creates the list of lower/upper div courses needed to generates the wheel picker items
	   }

	/*
		Functionality: To use the dictionary created in createDict to 
		generate the list of keys each Wheel Picker uses
	*/
	createDivList(dict,upper){
		iterator1 = dict.keys()
	   	if (upper == 0)
			myList = this.state.lowerDivList
		else
			myList = this.state.upperDivList
	   	for (var i = 0; i < dict.size;i++)
	   		{
		   		myList.push(iterator1.next().value)
	   		}
	}
	   
}
	/*
		Functionality: Opens up the Computer Science B.S. curriculum when the Curriculum Chart is selected
	*/
function csBSCurriculum() {
  WebBrowser.openBrowserAsync(
    'https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2018-07/CS_BS_18-19.pdf'
  );
}

function cseChanges() {
	WebBrowser.openBrowserAsync(
	  'https://undergrad.soe.ucsc.edu/bsoe-course-renumbering'
	);
  }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
  },
  lowerDivContainer: {
		top: 0,
		left: 0,
		justifyContent: 'center',
  },
  upperDivContainer: {
    	top: 0,
    	left: 0,
		justifyContent: 'center',
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
		paddingTop: 0,
		paddingBottom: 0,
},
searchButtonContainer: {
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
//npm install react-native-progress --save
//npm i react-native-LoopAnimation

import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View, Window, } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as Progress from 'react-native-progress';
import { Constants } from 'expo';

import ProgressBar from 'react-native-progress/Bar'

import LoopAnimation from 'react-native-LoopAnimation'


export class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SlugHub!',
  };
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  loadupTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3800
      )
    )
  }

  async componentDidMount() {
    this.animate();
    const data = await this.loadupTask();

   if (data !== null) {
     this.props.navigation.navigate('HomePage');
   }
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += .006;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, .001);
  }





  render() {

    const {navigate} = this.props.navigation;
    let pic = {
      uri: "https://www.pngkit.com/png/full/237-2373114_slug-png.png"
    };
    return (

      <View style={{flex:1}}>
       {/*this is the background animation */}
       <LoopAnimation source={require('../../../assets/images/forest.jpg')} duration={8000} />
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         padding: -20,
       }}>
         {/*Content goes here*/}
         <View style= {styles.container}>


           <Image source={pic} style={{width: 253, height: 160}}/>
             <TouchableHighlight
               underlayColor= 'transparent'
               style={styles.buttonContainer}
               >
                 <Text
                   style={styles.buttonText}>
                     Loading
                 </Text>
             </TouchableHighlight>

           <Progress.Bar
             style={styles.progress}
             progress={this.state.progress}
             indeterminate={this.state.indeterminate}
             />

         </View>
       </View>
     </View>



    );
  }
}
function transition(progress){
  if (progress == 100){
    navigate('HomePage')
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontSize: 30,
    padding: 60,
    //backgroundColor: "#4287f5",
    flex: 1
  },

  pageContainer: {
    fontSize: 30,
  },

  progress: {
    marginLeft: '23%',
    color : "#000000",
    borderColor: "#000000",
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


});

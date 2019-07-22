//npm install react-native-progress --save
//npm i react-native-LoopAnimation

import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View, Window, } from 'react-native';
import AppNavigator from '../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as Progress from 'react-native-progress';
import { Constants } from 'expo';

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
        progress += .1;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 350);
  }





  render() {

    const {navigate} = this.props.navigation;
    let pic = {
      uri: "https://www.pngkit.com/png/full/237-2373114_slug-png.png"
    };
    return (

      // <View style= {styles.container}>
      //
      //
      //   <Image source={pic} style={{width: 253, height: 160}}/>
      //   <Button
      //     title="Enter the App!"
      //     color = "#e6f542"
      //     onPress={() => navigate('HomePage')}
      //     />
      //
      //   <Progress.Bar
      //     style={styles.progress}
      //     progress={this.state.progress}
      //     indeterminate={this.state.indeterminate}
      //     />
      //
      // </View>



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
           <Button
             title="Loading"
             color = "#e6f542"
             //onPress={() => navigate('HomePage')}
             />

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
  },

  scrollingBackground: {
   backgroundColor: "#0B7483"
 },

});

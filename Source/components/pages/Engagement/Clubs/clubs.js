import React , {Component} from 'react';
import { TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class ClubsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerRight: (
        <TouchableHighlight onPress = {() => navigation.navigate('HomePage')}>
        <Image
        source={require('../../../../assets/images/home_icon.png')}
        style={{height: 35, width: 35, margin: 10}}
        resizeMode="contain"
        />
        </TouchableHighlight>
      ),
      title: 'Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>

      <Button
      title="Academic"
      color = "#e6f542"
      onPress={() => navigate('AcademicClubs')}
      />

      <Button
      title="Cultural & Identity"
      color = "#e6f542"
      onPress={() => navigate('CulturalClubs')}
      />

      <Button
      title="Environmental & Sustainability"
      color = "#e6f542"
      onPress={() => navigate('EnvironmentalClubs')}
      />

      <Button
      title="General Interest"
      color = "#B22222"
      onPress={() => navigate('General_InterestClubs')}
      />

      <Button
      title="Performing & Visual Arts"
      color = "#DC143C"
      onPress={() => navigate('Performing_ArtsClubs')}
      />

      <Button
      title="Political & Advocacy"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Professional "
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Religious & Spiritual"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Service"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Student Media"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />


      </View>

    );
  }
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
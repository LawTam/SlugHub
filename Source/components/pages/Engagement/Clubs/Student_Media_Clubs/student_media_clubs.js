import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class Student_Media_ClubsScreen extends React.Component {
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
      title: 'Student Media Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="Alay"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Banana Slug News"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Chinquapin Thirty-four"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="City on a Hill Press"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Eyecandy"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Film Production Coalition"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Fishrap Live!"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Fruitcake"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Gaia"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Kalopsia"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="KZSC"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Leviathan Jewish Journal"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Matchbox Magazine"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="On the Spot"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Rainbow TV"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

<Button
      title="Red Wheelbarrow"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Scientific Slug"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="SCTV"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />
      <Button
      title="Slug Works Animation"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />
      <Button
      title="TWANAS (Third World and Native American Students Press Collective)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

</ScrollView>
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

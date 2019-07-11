import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class General_InterestClubsScreen extends React.Component {
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
      title: 'General Interest Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="Active Minds"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Anthropology Society"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Balloon Art Brigade"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Brain, Mind, Consciousness Society"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Cosplay Club"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="The Great Chess Club"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="League of Slugs (LOS)"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Medieval Club of UCSC"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Metal Slugs"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Santa Cruz Fighting Game Community"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Sisterhood in STEM"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Slug Anime & Manga Association"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Slug Gaming"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="SlugLug Linux Users' Group"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="The Ten Colleges Debate Union, Debate Team"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Warriors for Peace"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
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

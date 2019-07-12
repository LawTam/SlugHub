import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class ReligiousClubsScreen extends React.Component {
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
      title: 'Religious & Spiritual Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="Acts 2 Christian Fellowship"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />
       <Button
      title="Asian-American Christian Fellowship"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />
      <Button
      title="Chabad Student Center"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Christians on Campus at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />
      <Button
      title="The Church of Jesus Christ of Latter-day Saints"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />
      <Button
      title="Community Seed Earth Spirit Fellowship"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />
      <Button
      title="Faith Education Action Service Together (FEAST)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />
      <Button
      title="FPMT Buddhist Centers of Santa Cruz"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />
      <Button
      title="Grad Student & Postdoc Christian Fellowship (GPCF)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />
      <Button
      title="High Street College Fellowship"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />
      <Button
      title="Hillel / Jewish Student Resource Center"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      
      <Button
      title="Hindu Student Association"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

    <Button
      title="International Students, Inc."
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />
      <Button
      title="InterVarsity Christian Fellowship"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />
      <Button
      title="Klesis Christian Fellowship"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

    <Button
      title="Kyrie Christian Fellowship"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

    <Button
      title="Lutheran Campus Ministry"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Muslim Student Association (MSA)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

    <Button
      title="Newman Catholic Campus Ministry"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Orthodox Christian Fellowship"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Santa Cruz Sikh Community/Sangat"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Sikh Student Association"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="SGI: World Peace Buddhist"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Slugs and Bahais"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Soon Movement"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Vintage Faith Church"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Young Life College"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
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

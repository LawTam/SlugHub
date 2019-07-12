import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class PoliticalClubsScreen extends React.Component {
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
      title: 'Political & Advocacy Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="314 Action at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Anak Bayan Santa Cruz"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="The Artistic Rehabilitative Therapeutic Initiative"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Banana Slugs for Animals"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="California Public Interest Research Group (CALPIRG)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="College Democrats at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="College Republicans"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Indivisible at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Mock Trial at UCSC"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Movimiento Estudiantil Chicano/a de Aztlan (MEChA)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Platypus Affiliated Society (PAS)"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Slugs for Israel"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Student Union Housing Workgroup"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Students for Sensible Drug Policy at UCSC"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Young Americans for Liberty at UCSC"
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

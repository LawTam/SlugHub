import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class Performing_ArtsClubsScreen extends React.Component {
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
      title: 'Peforming & Visual Arts Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="Acquire A Cappella"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Banana Slug Records"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Cloud 9 A Cappella"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Comedy Joust"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Fighting Slugs Marching Band"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Haluan Hip Hop Dance Troupe"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="The Hightones"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Interval"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Isang Himig Multi-Cultural A Capella"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Kadence Keys"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Kasama Ballroom Dance Troupe"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Kinetic Poetics Project (KPP)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Pagkakaisa Dance Troupe (PDT)"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="People Power Acting Troupe"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Popreka"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Queery"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Rainbow Theater"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Sabrosura Latin Dance Troupe"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Sequoia Singers"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Slug Stand-Up"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />

<Button
      title="Slugs in Fishnets"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Slugz II Men"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Taza Tal"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Traditional East Asian Music & Rockband"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
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

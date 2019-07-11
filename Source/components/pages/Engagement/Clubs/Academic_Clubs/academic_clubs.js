import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class AcademicClubsScreen extends React.Component {
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
      title: 'Academic Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="American Medical Student Association (AMSA)"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Aspiring Physician Assistant Association (APAA)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Association for Computing Machinery"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Association for Computing Machinery - Women"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Chemistry Club"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Chican@s and Latin@s Educandose"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Cognitive Science Student Association"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Community Unified Student Network (CUSN)"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Crypto Currency Club"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Empowering Latino Advancement Through Education and Development (E.L.A.T.E.D.)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="eWomen at UC Santa Cruz"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Game Design & Art Collaborations (GDA)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Golden Key International Honour Society"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Hermanos Unidos de UCSC"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Institute of Electrical and Electronics Engineers (IEEE)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Information Systems Management Association (ISMA)"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Kuya Ate Mentorship Program"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Model United Nations Club (SlugMUN)"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="National Society of Black Engineers (NSBE)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="National Society of Collegiate Scholars (NSCS)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />

<Button
      title="Philosophical Slug Society"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Slugs United by Mathematics (SUM)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Society for the Advancement of Chicanos and Native Americans in Science (SACNAS)"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Society of Women Engineers (SWESLUGS)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Tau Beta Pi Engineering Honors Society"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Umoja"
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

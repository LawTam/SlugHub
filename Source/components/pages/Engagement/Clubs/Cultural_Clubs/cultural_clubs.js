import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class CulturalClubsScreen extends React.Component {
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
      title: 'Cultural Clubs',
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <ScrollView>
      <Button
      title="A Step Forward"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="African American Theater Arts Troupe (AATAT)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="African Student Union"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Armenian Student Association (ASA)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Asian/Pacific Islander Student Alliance (APISA)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Bayanihan (formerly Filipino Student Association)"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Black Men's Alliance (BMA)"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Black Sistas United (BSU)"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Black Student Union (formerly African/Black Student Alliance)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Centro Americanos Unidos (CAU)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Chabad Student Group"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Chinese Student Association"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Chinese Students & Scholars Association"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="College Diabetes Network at UCSC"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Cultural Arts & Diversity (CAD)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Engaging Education (e2)"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Grupo Folklorico Los Mejicas"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="Han Chinese Clothing Association"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Hermanas Unidas (HaU)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Hmong Student Association (HSA)"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />

<Button
      title="Indian Student Association (ISA)"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="International Student Organization (ISO)"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Iranian Student Association"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Japanese Student Association (JSA)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Korean American Student Association (KASA)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Kahaani"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      
      <Button
      title="Oceania Navigators Empowerment (ONE)"
      color = "#e6f542"
      //onPress={() => navigate('NDT_BA')}
      />
      <Button
      title="People of the Islands (POI)"
      color = "#e6f542"
      //onPress={() => navigate('RE_BS')}
      />
      <Button
      title="Prism: Student Coalition for Gender, Sex, & Sexuality"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />
      <Button
      title="Project RISHI"
      color = "#e6f542"
      //onPress={() => navigate('TIM_BS')}
      />

<Button
      title="The Russian Club"
      color = "#e6f542"
      //onPress={() => navigate('BE_page')}
      />

      <Button
      title="Salsita Dance Group"
      color = "#e6f542"
      //onPress={() => navigate('CE_Major')}
      />

      <Button
      title="Sikh Student Association"
      color = "#e6f542"
      //onPress={() => navigate('CS_BS')}
      />

      <Button
      title="Society of Asian Scientists and Engineers (SASE)"
      color = "#B22222"
      //onPress={() => navigate('CS_BA')}
      />

      <Button
      title="Student Alliance of North American Indians (SANAI)"
      color = "#DC143C"
      //onPress={() => navigate('CSGD_BS')}
      />

      <Button
      title="Taiwanese Student Association"
      color = "#e6f542"
      //onPress={() => navigate('EE_BS')}
      />
      <Button
      title="Vietnamese Student Association (VSA)"
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

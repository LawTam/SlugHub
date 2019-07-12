import React , {Component} from 'react';
import { ScrollView, TouchableHighlight, Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../../../../../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as WebBrowser from 'expo-web-browser';

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
      onPress={AMSA_page}
      />

      <Button
      title="Aspiring Physician Assistant Association (APAA)"
      color = "#e6f542"
      onPress={APAA_page}
      />

      <Button
      title="Association for Computing Machinery"
      color = "#e6f542"
      onPress={ACM_page}
      />

      <Button
      title="Association for Computing Machinery - Women"
      color = "#B22222"
      onPress={ACM_page}
      />

      <Button
      title="Chemistry Club"
      color = "#DC143C"
      onPress={CC_page}
      />

      <Button
      title="Chican@s and Latin@s Educandose"
      color = "#e6f542"
      //onPress={CLE_page}
      />

      <Button
      title="Cognitive Science Student Association"
      color = "#e6f542"
      onPress={CSSA_page}
      />
      <Button
      title="Community Unified Student Network (CUSN)"
      color = "#e6f542"
      onPress={CUSN_page}
      />
      <Button
      title="Crypto Currency Club"
      color = "#e6f542"
      //onPress={CCC_page}
      />
      <Button
      title="Empowering Latino Advancement Through Education and Development (E.L.A.T.E.D.)"
      color = "#e6f542"
      //onPress={ELA_page}
      />
      <Button
      title="eWomen at UC Santa Cruz"
      color = "#e6f542"
      //onPress={EW_page}
      />

      <Button
      title="Game Design & Art Collaborations (GDA)"
      color = "#e6f542"
      onPress={GDA_page}
      />

      <Button
      title="Golden Key International Honour Society"
      color = "#e6f542"
      onPress={GK_page}
      />

      <Button
      title="Hermanos Unidos de UCSC"
      color = "#B22222"
      onPress={HU_page}
      />

      <Button
      title="Institute of Electrical and Electronics Engineers (IEEE)"
      color = "#DC143C"
      onPress={IEEE_page}
      />

      <Button
      title="Information Systems Management Association (ISMA)"
      color = "#e6f542"
      onPress={ISMA_page}
      />
      <Button
      title="Kuya Ate Mentorship Program"
      color = "#e6f542"
      onPress={KAM_page}
      />
      <Button
      title="Model United Nations Club (SlugMUN)"
      color = "#e6f542"
      onPress={MUN_page}
      />
      <Button
      title="National Society of Black Engineers (NSBE)"
      color = "#e6f542"
      onPress={NSBE_page}
      />
      <Button
      title="National Society of Collegiate Scholars (NSCS)"
      color = "#e6f542"
      onPress={NSCS_page}
      />

      <Button
      title="Philosophical Slug Society"
      color = "#e6f542"
      onPress={PSS_page}
      />

      <Button
      title="Slugs United by Mathematics (SUM)"
      color = "#e6f542"
      //onPress={PSS_page}
      />

      <Button
      title="Society for the Advancement of Chicanos and Native Americans in Science (SACNAS)"
      color = "#e6f542"
      onPress={SACN_page}
      />

      <Button
      title="Society of Women Engineers (SWESLUGS)"
      color = "#B22222"
      onPress={SWE_page}
      />

      <Button
      title="Tau Beta Pi Engineering Honors Society"
      color = "#DC143C"
      onPress={TBP_page}
      />

      <Button
      title="Umoja"
      color = "#e6f542"
      onPress={Umoja_page}
      />

</ScrollView>
      </View>

    );
  }
}

function AMSA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/groups/2200768448/'
  );
}

function APAA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/ucscapaa'
  );
}

function ACM_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/groups/acmucsc/about/'
  );
}

function CC_page() {
  WebBrowser.openBrowserAsync(
    'https://chemclubucsc.weebly.com/'
  );
}

function CSSA_page() {
  WebBrowser.openBrowserAsync(
    'https://ucsccssa.wordpress.com/'
  );
}

function CUSN_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/community-unified-student-network-cusn'
  );
}

function GDA_page() {
  WebBrowser.openBrowserAsync(
    'http://gdacollab.com/'
  );
}

function GK_page() {
  WebBrowser.openBrowserAsync(
    'https://www.goldenkey.org/'
  );
}

function HU_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/hudeucsc/'
  );
}

function IEEE_page() {
  WebBrowser.openBrowserAsync(
    'https://ieee.soe.ucsc.edu/'
  );
}

function ISMA_page() {
  WebBrowser.openBrowserAsync(
    'https://www.ismaucsc.com/'
  );
}

function KAM_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/kuya-ate-mentorship-program'
  );
}

function MUN_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/slugmun/'
  );
}

function NSBE_page() {
  WebBrowser.openBrowserAsync(
    'https://nsbe.soe.ucsc.edu/home'
  );
}

function NSCS_page() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/nscs.ucsc/'
  );
}

function PSS_page() {
  WebBrowser.openBrowserAsync(
    'https://philoslugs.wordpress.com/'
  );
}

function SACN_page() {
  WebBrowser.openBrowserAsync(
    'https://www.sacnas.org/'
  );
}

function SWE_page() {
  WebBrowser.openBrowserAsync(
    'https://sweslugs.soe.ucsc.edu/'
  );
}

function TBP_page() {
  WebBrowser.openBrowserAsync(
    'https://tbp.soe.ucsc.edu/'
  );
}

function Umoja_page() {
  WebBrowser.openBrowserAsync(
    'https://engagingeducation.org/umoja'
  );
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

import React , {Component} from 'react';
import {Button, Alert, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, KeyboardAvoidingView} from 'react-native';

//tcomb-form-native
export class LoginScreen extends Component {
  static navigationOptions = {
    title: 'test',
  };
  constructor(props) {
      super(props);
      this.state ={
        TextInputEmail:'',
        LoginState: false,
      }
  }
  CheckTextInput = () => {
      const {TextInputEmail} = this.state;
      if (TextInputEmail === '') {alert('please enter Email')}
      else {
          //changeState
          this.setState({LoginState: true})
          this.props.navigation.navigate('Welcome')
        }
  }
  render() {
      let pic = { uri: "https://www.pngkit.com/png/full/237-2373114_slug-png.png"};
    const {navigate} = this.props.navigation;
    //const {LogState} = this.state.LoginState;
    //console.log(LogState)
    if (this.state.LoginState != true) {
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.container}>
              <Image source={pic} style={{width: 253, height: 160}}/>
                <Text>Logo Here</Text>
              </View>
              
              <View style={styles.container}>
                <TextInput
                onChangeText={TextInputEmail => this.setState({TextInputEmail})}
                placeholder = "Email"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                style={styles.input}
                />
                <TextInput
                placeholder = "password"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
                <Button
                title ="Login"
                color = "#e6f542"
                onPress={this.CheckTextInput}
                />
            </View>
          </KeyboardAvoidingView>
        );
    }
    else {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                  <Text>Welcome</Text>
                </View>
                
                <View style={styles.container}>
                  
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>
                          Logout
                      </Text>
                  </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        );
    }
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
    input: {
      height: 40,
      backgroundColor: '#A3DCFF',
      color: '#000FFF',
      marginBottom: 15,
      paddingVertical: 10
    },
    button: {
      backgroundColor: '#298FFF',
      paddingVertical: 15
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    },
});

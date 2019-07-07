import React , {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, KeyboardAvoidingView} from 'react-native';


export class LoginScreen extends Component {
  static navigationOptions = {
    title: 'test',
  };
  render() {
      return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.container}>
                <Text>Logo Here</Text>
              </View>
              
              <View style={styles.container}>
                <TextInput
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
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

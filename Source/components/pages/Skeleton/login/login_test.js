import React , {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, KeyboardAvoidingView} from 'react-native';


export class LogoutScreen extends Component {
  static navigationOptions = {
    title: 'test',
  };
  render() {
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

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      fontSize: 30,
      padding: 60,
      backgroundColor: "#4287f5",
      flex: 1
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

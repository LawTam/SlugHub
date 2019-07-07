import React , {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar} from 'react-native';
//import LoginForm from './loginForm';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                  <Text style={styles.input}>Logo Here</Text>
                </View>
                
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
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
  /*logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
  },*/
});

export default Login;
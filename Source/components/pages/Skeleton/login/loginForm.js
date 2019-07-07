import React , {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar} from 'react-native';

    import AppNavigator from '../../navigation/AppNavigator';
    import { createAppContainer } from 'react-navigation';

export default class LoginForm extends Component {
    render() {
        return (
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
                <TouchableOpacity>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
});
import React, { Component } from 'react';
import {
    Text, View, TouchableHighlight, StyleSheet, TextInput, Button
} from 'react-native';
import { TopAlbums } from '../screenNames';

export default class LoginComponent extends Component {
    render() {
        return (
            <View style={styles.container}>    

                <View style={styles.logoContainer} >
                    <Text style={styles.logo}>Music Challenge</Text>
                </View>
            
                <View style={styles.formContainer} >
                    <TextInput style={styles.inputBox}
                            underlineColorAndroid='transparent'
                            placeholder="Email"
                            placeholderTextColor="#757575" />

                    <TextInput style={styles.inputBox}
                            underlineColorAndroid='transparent'
                            placeholder="Password"
                            placeholderTextColor="#757575"
                            secureTextEntry={true} />
                    <Button
                        title="Login"
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.navigation.navigate(TopAlbums);
                        }}>
                        Login
                    </Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },

    logoContainer: {
        
    },

    logo: {
        fontSize: 32,
        color: 'black'
    },

    formContainer: {
        marginTop: 30
    },

    inputBox: {
        width: 299,
		backgroundColor: 'rgba(158,158,158,0.2)',
		fontSize: 16,
		marginVertical: 10,
		color: 'black',
		paddingHorizontal: 15
	},

})
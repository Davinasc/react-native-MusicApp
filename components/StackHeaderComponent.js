import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableWithoutFeedback, StyleSheet
} from 'react-native';

export default class StackHeaderComponent extends Component {
    render() {
        const {title} = this.props;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Image
                        style={styles.menuIcon}
                        source={require('../icons/back-icon.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },

    menuIcon: { 
        width: 25, 
        height: 25,
        opacity: 0.5,
        marginLeft: 10
    },

})

import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight, StyleSheet
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        const {title} = this.props;
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.menuButton}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');
                    }}>
                    <Image
                        style={styles.menuIcon}
                        source={require('../icons/menu-icon.png')}
                    />
                </TouchableHighlight>
                <View>
                    <Text style={styles.title}>{ title }</Text>
                </View>
                <View style={{marginRight: 15}} >
                    <Image
                        style={styles.menuIcon}
                        source={require('../icons/search-icon.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },

    title: {
        fontSize: 18,
        color: 'black'
    },

    menuIcon: { 
        width: 25, 
        height: 25,
        opacity: 0.3
    },

    menuButton: {
        marginLeft: 10
    }

})

import React, { Component } from 'react';
import {
    Text, View, Image, FlatList, StyleSheet, ScrollView, TouchableHighlight
} from 'react-native';

import StackHeaderComponent from './StackHeaderComponent';

export default class BandDetailComponent extends Component {

    render() {
        const { band } = this.props.navigation.state.params;
        const navigation = this.props.navigation;
        return (
            <View style={{flex: 1}} >
                <StackHeaderComponent {...this.props} />
                <ScrollView style={styles.container}>
                    <View style={styles.bandImageContent}>
                        <Image
                            style={{width: '100%', height: '100%'}}
                            source={{uri: band.image}}
                        />
                    </View>
                    <View style={styles.bandContent} >
                        <Text style={styles.bandName} >{band.name}</Text>
                        <Text style={styles.bandHistory} >{band.history}</Text>
                        <Text style={styles.bandAlbum}>Albums</Text>
                        <FlatList 
                            numColumns={3}
                            data={band.albums}
                            renderItem={({item, index}) => {
                                return (
                                    <FlatListItem band={band} navigation={navigation} item={item} index={index}>
                
                                    </FlatListItem>);
                            }} >
                        
                        </FlatList>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


class FlatListItem extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { item, band } = this.props;        
        return (
            <View style={styles.albumContainer}>
                <TouchableHighlight onPress={() => navigate('PlayerScreen', {band: band , album: item} )}>
                    <View style={styles.albumContent}>
                        <Image 
                            source={{uri: this.props.item.cover}}
                            style={{width: '100%', height: '100%'}}
                        >
                        </Image>   
                    </View>
                </TouchableHighlight>  
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    bandImageContent: {
        height: 250,
        alignItems: 'center',
        borderBottomWidth: 1
    },

    bandContent: {
        margin: 15
    },

    bandName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10
    },

    bandHistory: {
        textAlign: 'auto',
        fontSize: 14,
        lineHeight: 25
    },

    bandAlbum: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10
    },

    albumContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 100,
        maxWidth: '33%',
    },

    albumContent: {
        margin: 8,
        elevation: 1,
        backgroundColor: '#000',
    }

});
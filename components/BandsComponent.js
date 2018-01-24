import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight, FlatList, StyleSheet, ImageBackground
} from 'react-native';
import HeaderComponent from './HeaderComponent';

import data from '../data/bands';

export default class BandsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Bands';
        return { drawerLabel };
    }
    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <HeaderComponent title={'Bands'} {...this.props} />
                <FlatList
                data={data}
                renderItem={({item, index}) => {
                    return (
                        <FlatListItem navigation={navigation} item={item} index={index}>
    
                        </FlatListItem>);
                }} >
                  
                </FlatList>
            </View>
        );
    }
}


class FlatListItem extends Component {
    render() { 
        const { navigate } = this.props.navigation;
        const { item } = this.props;
        let songs = 0;       
        return (
          <TouchableHighlight onPress={() => navigate('BandDetailScreen', {band: item.band})}>
            <ImageBackground
                style={styles.itemContainer}
                source={{uri: item.band.image}}
            >
                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>{item.band.name}</Text>
                    <View style={styles.itemDetail}>

                    {item.band.albums.map( (album) => { 
                            songs += album.songs
                        })
                    }

                        <Text style={styles.itemText}>
                            {songs} Songs
                        </Text>
                        <Text style={styles.itemText}>
                            {item.band.albums.length} Albums
                        </Text>
                    </View>
                </View>

            </ImageBackground>
          </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    
    itemContainer: {
        width: '100%',
        height: 150,
        marginBottom: 5
    },
    
    itemContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingTop: 30
    },

    itemDetail: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    
    itemTitle: {
        color: 'white',
        padding: 10,
        fontSize: 24,  
    },

    itemText: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 10
    }
});
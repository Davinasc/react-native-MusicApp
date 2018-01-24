import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight, FlatList, StyleSheet, ImageBackground
} from 'react-native';
import HeaderComponent from './HeaderComponent';

import data from '../data/playlists';

export default class PlaylistsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Playlists';
        return { drawerLabel };
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderComponent title={'Playlists'} {...this.props} />

                    <ImageBackground
                        source={{uri: data[0].image}}
                        style={styles.playlistImage}
                    >
                        <View style={styles.playlist}>
                            <Text style={styles.playlistTitle}>{data[0].name}</Text>
                            <Text style={styles.playlistText}>Playlist duration {data[0].time}</Text>
                        </View>

                    </ImageBackground>

                <FlatList
                style={styles.content}
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
        return (
            <View>
                    {item.bands.map((band) => {
                        return band.band.albums.map((album) => {
                            return( 
                                <View style={styles.itemContainer}>
                                    <TouchableHighlight onPress={() => navigate('PlayerScreen', {band: band, album: album})}>
                                        <Image 
                                            source={{uri: album.cover}}
                                            style={styles.albumCover}
                                        >

                                        </Image>
                                    </TouchableHighlight>      
                                    <Text style={styles.albumName}>{album.name}</Text>
                                    <View style={styles.albumTime}>
                                        <Text >{album.time}</Text>
                                    </View>
                                </View>
                            )
                        });
                    })
                }  
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    content: {
        margin: 10
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 2,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    albumName: {
        fontSize: 16,
        paddingLeft: 10 
    },

    albumTime: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    albumCover: {
        width: 80, 
        height: 90
    },

    playlist: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 30
    },

    playlistImage: {
        width: '100%',
        height: 130
    },

    playlistTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },

    playlistText: {
        color: 'white',
        fontSize: 16
    }

});
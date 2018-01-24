import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight, FlatList, StyleSheet, Dimensions, ImageBackground
} from 'react-native';
import HeaderComponent from './HeaderComponent';

import data from '../data/bands';

export default class AlbumsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Albums';
        return { drawerLabel };
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderComponent title={'Albums'} {...this.props} />
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
                {item.band.albums.map((album) => {
                    return( 
                        <View style={styles.itemContainer}>
                            <TouchableHighlight onPress={() => navigate('PlayerScreen', {band: item.band, album: album})}>
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
        flex: 1,
        margin: 15
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
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
    }

});
import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight, StyleSheet, FlatList
} from 'react-native';

import HeaderComponent from './HeaderComponent';
import data from '../data/bands';

export default class TopAlbumsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Top Albums';
        return {drawerLabel};
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <View removeClippedSubviews={true} style={styles.container} >      
                <HeaderComponent title={'Top Albums'} {...this.props} />      
                <FlatList 
                numColumns={2}
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
          <View style={styles.itemContainer}>
                <TouchableHighlight onPress={() => navigate('PlayerScreen', {band: item.band, album: item.band.albums[0]})}>
                    <View style={styles.itemContent}>
                        <Image 
                            source={{uri: this.props.item.band.albums[0].cover}}
                            style={styles.itemImage}
                        >
                        </Image>
                        <Text style={styles.itemTitle}>{this.props.item.band.albums[0].name}</Text>
                        <Text style={styles.itemText}>{this.props.item.band.name}</Text>      
                    </View>
                </TouchableHighlight>  
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fafafa',
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 265,
        maxWidth: '50%',
    },

    itemContent: {
        margin: 5,
        elevation: 1,
        zIndex: 2,
        backgroundColor: '#fff',
    },

    itemImage: {
        width: '100%',
        height: 200
    },

    itemTitle: {
        color: 'black',
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 16,  
    },

    itemText: {
        paddingBottom: 5,
        paddingLeft: 5,
    }

})
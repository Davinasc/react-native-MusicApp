import React, { Component } from 'react';
import {
    Text, View, Image, FlatList, StyleSheet, ScrollView, Slider, Dimensions, ProgressBarAndroid
} from 'react-native';

import StackHeaderComponent from './StackHeaderComponent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class PlayerComponent extends Component {
    render() {
        const { band, album } = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <StackHeaderComponent {...this.props} />
                <View style={styles.container}>
                    <View style={styles.bandImageContent}>
                        <Image
                            style={{width: SCREEN_WIDTH, height: '100%'}}
                            source={{uri: album.cover}}
                        />
                    </View>

                    <View style={styles.progressContent}>
                        <Text style={{fontSize: 13, marginHorizontal:5}} >0:00</Text>

                        <ProgressBarAndroid 
                         style={{width: 250}}
                         styleAttr='Horizontal'
                         />

                        <Text style={{fontSize: 13, marginHorizontal:5}} >{album.time}</Text>

                    </View>

                    <Text style={styles.albumName}>{album.name}</Text>
                    <Text style={styles.bandName}>{band.name}</Text>

                    <View style={styles.favoriteContent} >
                        <Image
                         style={styles.favoriteIcon}
                         source={require('../icons/star-blank-icon.png')}
                        />
                        <Image
                         style={styles.favoriteIcon}
                         source={require('../icons/star-blank-icon.png')}
                        />
                        <Image
                         style={styles.favoriteIcon}
                         source={require('../icons/star-blank-icon.png')}
                        />
                        <Image
                         style={styles.favoriteIcon}
                         source={require('../icons/star-blank-icon.png')}
                        />
                        <Image
                         style={styles.favoriteIcon}
                         source={require('../icons/star-blank-icon.png')}
                        />
                    </View>

                    <View style={styles.playerContent} >
                        <Image
                         style={styles.playerIcon}
                         source={require('../icons/back-arrows-icon.png')}
                        />
                        <Image
                         style={styles.playerIcon}
                         source={require('../icons/play-icon.png')}
                        />
                        <Image
                         style={styles.playerIcon}
                         source={require('../icons/front-arrows-icon.png')}
                        />
                    </View>

                    <View style={styles.soundContent}>
                        <Image
                         style={styles.soundIcon}
                         source={require('../icons/speaker-icon.png')}
                        />
                        <Slider
                         style={{ width: 250 }}
                        />
                        <Image
                         style={styles.soundIcon}
                         source={require('../icons/speaker-max-icon.png')}
                        />
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    bandImageContent: {
        height: '60%',
    },

    soundContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    soundIcon: {
        width: 20, 
        height: 20,
        opacity: 0.5,
    },

    playerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    playerIcon: {
        width: 30, 
        height: 30,
        marginHorizontal: 25
    },

    favoriteContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    favoriteIcon: {
        width: 20, 
        height: 20,
        marginHorizontal: 5,
        opacity: 0.5,
    },

    albumName: {
        fontSize: 20,
    },

    bandName: {
        fontSize: 16,
        marginVertical: 5,
    },

    progressContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

});
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

//Components
import TopAlbumsComponent from './components/TopAlbumsComponent';
import PlaylistsComponent from './components/PlaylistsComponent';
import BandsComponent from './components/BandsComponent';
import AlbumsComponent from './components/AlbumsComponent';
import LoginComponent from './components/LoginComponent';
import BandDetailComponent from './components/BandDetailComponent';
import PlayerComponent from './components/PlayerComponent';
//Screen names
import { TopAlbums, Playlists, Bands, Albums, Logout } from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    TopAlbums: {
        screen: TopAlbumsComponent,
    },
    Playlists: {
        screen: PlaylistsComponent,
    },
    Bands: {
        screen: BandsComponent,
    },
    Albums: {
        screen: AlbumsComponent,
    },
    Logout: {
        screen: LoginComponent,
    }
};
let drawerNavigatorConfig = {    
    initialRouteName: TopAlbums,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [TopAlbums, Bands, Albums, Playlists, Logout]
};

const Drawer = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

const App = StackNavigator(
    {
        LoginScreen: { screen: LoginComponent },
        DrawerNavigator: { screen: Drawer },
        BandDetailScreen: { screen: BandDetailComponent },
        PlayerScreen: { screen: PlayerComponent }
    },
    {
        headerMode: 'none'
    }
);

//const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('Challenge', () => App);

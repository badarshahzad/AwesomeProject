import React from 'react';
import {DrawerNavigator} from 'react-navigation'; // DrawerNavigator function depricated used createDrawerNavigator
import SplashScreen from './screens/splash.screen';


const Splash ={
    screen: SplashScreen,
    navigationOptions:{
        header:null
    }
}

// this string should match the const Splash
const RouteConfig = {
    initialRoute: 'Splash' 
}

const AppNavigator = DrawerNavigator({
    Splash: Splash
}, RouteConfig);

export default AppNavigator;

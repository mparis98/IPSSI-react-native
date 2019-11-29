import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import NavigationMap from './NavigationMap';
import NavigationApi from './NavigationApi';
import NavigationAnimatedView from './NavigationAnimatedView';

export default class Navigation extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

const AppNavigator = createBottomTabNavigator({
        Map: {
            screen: NavigationMap
        },
        Liste:{
            screen:NavigationApi
        },
        Home:{
            screen:NavigationAnimatedView
        }
    }, {
        initialRouteName: 'Map',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: false, // fixes a bug in react navigation
        tabBarOptions: {
            allowFontScaling: false,
            style: {
                backgroundColor: 'white',
                padding: 8,
            },
            labelStyle: {
                color: 'blue',
                fontSize: 12,
            },

        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

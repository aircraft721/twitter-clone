import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { colors } from './utils/constants';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            headerTitle: 'Home',
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: TAB_ICON_SIZE}}>{Icons.home}</FontAwesome>
        })
    }, 
    Explore: {
        screen: ExploreScreen,
        navigationOptions: () => ({
            headerTitle: 'Explore',
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: TAB_ICON_SIZE}}>{Icons.search}</FontAwesome>
        })
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: () => ({
            headerTitle: 'Notification',
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: TAB_ICON_SIZE}}>{Icons.bell}</FontAwesome>
        })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            headerTitle: 'Profile',
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: TAB_ICON_SIZE}}>{Icons.user}</FontAwesome>
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.LIGHT_GRAY,
        style: {
            backgroundColor: colors.WHITE,
            height: 50,
            paddingVertical: 1,
        }
    }
})

const AppMainNav = StackNavigator({
    Home: {
        screen: Tabs,
    },
}, {
    cardStyle: {
        backgroundColor: '#f1f6fa',
    },
    navigationOptions: () => ({
        headerStyle: {
            backgroundColor: colors.WHITE,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY,
            alignSelf: 'center'
        },
    })
});

class AppNavigator extends Component {
    render() {
        const nav = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
        });
        return (
            <AppMainNav navigation={nav} />
        );
    }
}

export default connect(state => ({
    nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router;
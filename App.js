import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'


import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const switchNavigator = createSwitchNavigator({
    loginflow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainflow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
})

export default createAppContainer(switchNavigator);
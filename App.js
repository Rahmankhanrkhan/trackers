import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as FunctionProvider } from './src/context/FunctionContext'
import { setNavigator } from './src/navigationRef';

import CreateScreen from './src/screens/CreateScreen';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import DetailScreen from './src/screens/DetailScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';


const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginflow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,
        Create: CreateScreen,
        Edit: EditScreen,
        Detail: DetailScreen,
        
    }),

    mainflow: createBottomTabNavigator({
        Books: createStackNavigator({
            Index: IndexScreen
        }),
        Account: AccountScreen
    })
})

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <FunctionProvider>
                <App ref={
                    (navigator) => {
                        setNavigator(navigator)
                    }
                }
                />
            </FunctionProvider>

        </AuthProvider>
    )
}
import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context} from '../context/authContext'
import { NavigationEvents } from 'react-navigation';
const SigninScreen = () => {
    const { state, signIn, clearMessage} = useContext(Context)
    return (
        <View style ={styles.container} >
        <NavigationEvents
            onWillBlur={clearMessage}
        />
            <AuthForm
                submitButtonText='Sign in'
                headerText='Signin with Books  '
                onSubmit = {signIn}
                errorMessage = {state.errorMessage}
            />
            <NavLink
                route='Signup'
                text='Did not have an account?'
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
    }
});

export default SigninScreen;

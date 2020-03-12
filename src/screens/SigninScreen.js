import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context} from '../context/authContext'
const SigninScreen = () => {
    const {signIn} = useContext(Context)
    return (
        <View>
            <AuthForm
                submitButtonText='Sign in'
                headerText='Signin with Books  '
                onSubmit = {signIn}
            />
            <NavLink
                route='Signup'
                text='Did not have an account?'
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SigninScreen;

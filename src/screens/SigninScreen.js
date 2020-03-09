import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const {signIn} = useContext(Context)
    return (
        <View>
            <Text style={{ fontSize: 10 }} >SigninScreen</Text>
            <AuthForm
                submitButtonText='Sign in'
                headerText='Signin'
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

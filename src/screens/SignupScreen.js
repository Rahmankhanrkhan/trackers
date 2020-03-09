import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthContext)
    console.log('signupstate:::', state)
    

    return (
        <View style={styles.container} >
            <AuthForm
                headerText='Signup with Trackers'
                errorMessage={state.errorMessage}
                onSubmit={signUp}
                submitButtonText='Sign Up'
            />
            
            <NavLink
                text = 'Already have an account?'
                route = 'Signin'
            />

        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;

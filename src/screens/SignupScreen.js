import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthContext)
    
    return (
        <View style={styles.container} >
            {/* <Button title='Index' onPress={() => navigation.navigate('Index')} />
            <Button title='Edit' onPress={() => navigation.navigate('Edit')} />
            <Button title='Create' onPress={() => navigation.navigate('Create')} />
            <Button title='Detail' onPress={() => navigation.navigate('Index')} /> */}
            <AuthForm
                headerText='Signup with Books'
                errorMessage={state.errorMessage}
                onSubmit={signUp}
                submitButtonText='Sign Up'
            />

            <NavLink
                text='Already have an account?'
                route='Signin'
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
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;

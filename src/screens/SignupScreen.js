import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container} >
            <Spacer>
                <Text h3>Signup with Trackers  </Text>
            </Spacer>
            <Spacer>
                <Input
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    secureTextEntry
                    label='Password'
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button title='Signup' />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
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

export default SignupScreen

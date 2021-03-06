import React, { useState } from 'react';
import { View, StyleSheet, Keyboard, } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const AuthForm = ({ headerText, onSubmit, submitButtonText, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View>
                <Spacer>
                    <Text h3> {headerText}  </Text>
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

                {
                    errorMessage ?
                        <Text style={styles.response} > {errorMessage} </Text>
                        : null
                }

                <Spacer>
                    <Button
                        title={submitButtonText}
                        onPress={() => onSubmit({ email, password })}

                    />
                </Spacer>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    response: {
        color: 'red',
        alignItems:'center',
        alignContent:'center',
        fontSize: 20,
        justifyContent: 'center',
        marginLeft: 150
    }
})

export default AuthForm;
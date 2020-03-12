import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import InitialFields from '../components/InitialFields';
import { Context } from '../context/FunctionContext';

const CreateScreen = ({ navigation }) => {
    const { addBook } = useContext(Context)
    return (
       <InitialFields
           headerText = 'Add New Book'
           buttonText = 'Add'
           onSubmit= {(title,author)=>{
                addBook(title,author, ()=> navigation.navigate('Index') )
            }
            }
       />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    Text: {
        marginLeft: 10
    }
})

export default CreateScreen;

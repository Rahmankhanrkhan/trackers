import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Spacer from './Spacer';
import { TextInput } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';


const InitialFields = ({ navigation, headerText, buttonText, onSubmit, initialState }) => {
  console.log('Navigation:::', navigation)
  const [title, setTitle] = useState(initialState.title);
  const [author, setAuthor] = useState(initialState.author);
  console.log('TITLE :', title, 'AUTHOR :', author)



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Spacer>
          <Text style={styles.header} >{headerText} </Text>
        </Spacer>
        <Spacer>
          <Text style={styles.Text} >Title</Text>
          <TextInput
            placeholder='Enter'
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
          />
        </Spacer>

        <Spacer>
          <Text style={styles.Text} >Author Name</Text>
          <TextInput
            placeholder='Enter'
            style={styles.input}
            onChangeText={(text) => setAuthor(text)}
          />
        </Spacer>
        <Spacer>
          
          <TextInput
            placeholder='type'
            onUpload
          />
        </Spacer>

        <Spacer>
          <Button
            title={buttonText}
            onPress={() => onSubmit(title, author)}
          />
        </Spacer>

      </View>
    </TouchableWithoutFeedback>
  )

}

InitialFields.defaultProps = {
  initialState: {
    title: '',
    author: ''
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
    marginHorizontal: 100


  },
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


export default InitialFields

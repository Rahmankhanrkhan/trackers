import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import Spacer from '../components/Spacer';
import { Context } from '../context/FunctionContext';

const IndexScreen = ({ navigation }) => {
    const functionContext = useContext(Context)
    const { state } = functionContext
    console.log('state:::', state)
    // console.log(navigate.getParam('id')
    console.log('CONTEXT:::', Context)
    const accessId = navigation.getParam('accessId')

    return (
        <View>
            <Text> {accessId} </Text>
            <FlatList
                data={state}
                keyExtractor={(book) => book.id}
                renderItem={({ item }) => {
                    return (
                        <ScrollView>
                            <Spacer>
                                <View style={styles.row} >
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Detail', { id: item.id })}
                                    >
                                        <Text style={styles.text} >{item.title} -- {item.id} </Text>
                                    </TouchableOpacity>

                                </View>
                            </Spacer>
                        </ScrollView>
                    )
                }
                }
            />
        </View>

    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Create')}
            >
                <Feather name='plus' size={30} />
            </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginVertical: 10,

    },
    icon: {
        alignContent: 'center',
        fontSize: 30
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey'

    }
})

export default IndexScreen;



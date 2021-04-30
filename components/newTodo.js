import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function NewTodo({ submitNewTodo }) {

    let [text, setNewText] = useState('');
    let [date, setNewDate] = useState('');

    const newTodoText = (value) => {
        setNewText(value);
    }

    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='add a new todo'
            onChangeText={newTodoText}
            >  
            </TextInput>
            <TextInput
            style={styles.input}
            placeholder='date'
            onChangeText={setNewDate}
            >
            </TextInput>
        <Button 
        onPress={() => submitNewTodo(text, date)} 
        title='add a new todo'
        color='blue'>
        </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
})
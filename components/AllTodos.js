import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function AllTodos(props) {

    let todoStyle;
    if (props.item.completed) {
        todoStyle = styles.completeTodo
    } else {
        todoStyle = styles.incompleteTodo
    }
    return(
        <TouchableOpacity style={todoStyle} onPress={props.handleToggle}>
            <Text style={styles.text}><CheckBox checked={props.item.completed} />{props.item.description}</Text>
            <Text style={styles.text}>{"Date: "+props.item.date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontColor: "black",
    },
    completeTodo: {
        backgroundColor: "green",
        padding: 20,
        marginTop: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    },
    incompleteTodo: {
        backgroundColor: "lightgray",
        padding: 20,
        marginTop: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    },
})
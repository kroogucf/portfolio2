import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function AllTodos(props) {

    let [completed, setCompleted] = useState(props.item.completed);

    let todoStyle;
    if (completed) {
        todoStyle = styles.completeTodo
    } else {
        todoStyle = styles.incompleteTodo
    }
    return(
        <TouchableOpacity style={todoStyle} onPress={props.handleToggle}>
            <Text style={styles.text}><CheckBox onPress={props.handleToggle} checked={props.item.completed} />{props.item.description}</Text>
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
        paddingBottom: 10,
        marginTop: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },
    incompleteTodo: {
        backgroundColor: "lightgray",
        paddingBottom: 10,
        marginTop: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },
})
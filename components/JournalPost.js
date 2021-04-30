import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalPost(props) {

    let [title, setTitle] = useState(props.item.title);
    let [date, setDate] = useState(props.item.date);
    let [text, setText] = useState(props.item.text);

    return(
        <View style={styles.view}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#86839B',
        borderBottomColor: 'black',
    },
    text: {
        fontSize: 10,
    },
    dateText: {
        fontSize: 8,
    },
    titleText: {
        fontSize: 10,
        fontWeight: 'bold',
    }
})
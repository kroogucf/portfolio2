import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalPost(props) {

    let [title, setTitle] = useState(props.item.title);
    let [date, setDate] = useState(props.item.date);
    let [text, setText] = useState(props.item.text);

    return(
        <View>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{text}</Text>
        </View>
    )

}
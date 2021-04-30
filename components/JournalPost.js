import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalPost(props) {

    let [title, setTitle] = useState(props.title);
    let [date, setDate] = useState(props.date);
    let [text, setText] = useState(props.text);

    return(
        <View>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{text}</Text>
        </View>
    )

}
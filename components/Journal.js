import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalApp({ submitJournalPost }) {
    

    let [text, setNewText] = useState('');
    let [date, setNewDate] = useState('');

    const newJournalPost = (value) => {
        setNewText(value);
    }

    return(
        <View>
            <TextInput>
                placeholder="Name This Post"
                onChangeText={newJournalPost}
            </TextInput>
            <TextInput>
                placeholder="Date"
                onChangeText={setNewDate}
            </TextInput>
            <Button>
                onPress
            </Button>
        </View>
    )
}
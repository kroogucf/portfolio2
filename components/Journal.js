import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalApp({ submitJournalPost }) {
    
    let [title, setNewTitle] = useState('');
    let [text, setNewText] = useState('');
    let [date, setNewDate] = useState('');

    const newJournalPost = (value) => {
        setNewText(value);
    }
    const newJournalTitle = (value) => {
        set
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
                onPress={() => submitJournalPost(text, date)}
            </Button>
        </View>
    )
}
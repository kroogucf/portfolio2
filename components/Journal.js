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
        setNewTitle(value);
    }

    return(
        <View>
            <TextInput>
                placeholder="Name This Entry"
                onChangeText={newJournalTitle}
            </TextInput>
            <TextInput>
                placeholder="Write your entry."
                onChangeText={newJournalPost}
            </TextInput>
            <TextInput>
                placeholder="Date this entry"
                onChangeText={setNewDate}
            </TextInput>
            <Button>
                onPress={() => submitJournalPost(title, text, date)}
                title="Add a New Journal Entry"
            </Button>
        </View>
    )
}
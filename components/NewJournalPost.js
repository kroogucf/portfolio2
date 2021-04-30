import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function NewJournalPost(props) {
    
    let [title, setNewTitle] = useState('');
    let [text, setNewText] = useState('');
    let [date, setNewDate] = useState('');

    const newJournalPost = (value) => {
        setNewText(value);
    }
    const newJournalTitle = (value) => {
        setNewTitle(value);
    }
    const newJournalDate = (value) => {
        setNewDate(value);
    }

    return(
        <View>
            <TextInput styles={styles.input}
                placeholder="Name This Entry"
                onChangeText={newJournalTitle}
                >
            </TextInput>
            <TextInput styles={styles.input}
                placeholder="Write your entry."
                onChangeText={newJournalPost}
                >
            </TextInput>
            <TextInput styles={styles.input}
                placeholder="Date this entry"
                onChangeText={newJournalDate}
                >
            </TextInput>
            <Button
                onPress={() => {props.submitNewJournal(title, text, date)}}
                title="Add a New Journal Entry"
                >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: "#ccc",
        fontWeight: 600,
        margin: 10,
    },
})
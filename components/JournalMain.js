import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View} from "react-native";
import JournalPost from './JournalPost';

export default function JournalMain(){

    let [data, setNewJournals] = useState([]);

    const submitNewJournal = (title, text, date) => {
        setNewJournals((prevJournals) => {
          return [
            { key: Math.random().toString(), text: text, date: date, title: title},
            ...prevJournals
          ]
        })
      }

    return(<SafeAreaView style={styles.container}>
        <Text style={styles.title}>JOURNAL APP</Text>
        <FlatList
          data={data} 
          renderItem={({ item }) => (
            <JournalPost item={item} handleToggle={()=>{handleToggle(item.key)}} journals={data} />
          )}>
        </FlatList>
        <NewJournalPost submitNewJournal={submitNewJournal}></NewJournalPost>
      </SafeAreaView>);
}
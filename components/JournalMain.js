import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView} from "react-native";
import JournalPost from './JournalPost';
import NewJournalPost from './NewJournalPost';

export default function JournalMain() {

    let [data, setNewJournals] = useState([]);

    const submitNewJournal = (title, text, date) => {
        setNewJournals((prevJournals) => {
          return [
            { key: Math.random().toString(), text: text, date: date, title: title},
            ...prevJournals
          ]
        })
      }

    return((<SafeAreaView>
        <Text>JOURNAL APP</Text>
        <FlatList
          data={data} 
          renderItem={({ item }) => (
            <JournalPost item={item} />
          )}>
        </FlatList>
        <NewJournalPost submitNewJournal={submitNewJournal}></NewJournalPost>
      </SafeAreaView>));
}
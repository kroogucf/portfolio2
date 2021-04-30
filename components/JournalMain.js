import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView} from "react-native";
import JournalPost from './JournalPost';
import NewJournalPost from './NewJournalPost';

export default function JournalMain() {

    let [data, setNewJournals] = useState([]);

    return((<SafeAreaView style={styles.view}>
        <FlatList
          data={data} 
          renderItem={({ item }) => (
            <JournalPost item={item} />
          )}>
        </FlatList>
        <NewJournalPost submitNewJournal={(title, text, date) => {
        setNewJournals((prevJournals) => {
          return [
            { key: Math.random().toString(), text: text, date: date, title: title},
            ...prevJournals
          ]
        })
      }}></NewJournalPost>
      </SafeAreaView>));
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 10,
        marginTop: 10,
        paddingTop: 8,
        paddingBottom: 20,
        borderRadius: 15,
        backgroundColor: '#2594F2',
    },
})
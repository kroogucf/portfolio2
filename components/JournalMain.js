import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalMain(){

    const submitNewJournal = (text, date) => {
        setNewJournal((prevJournals) => {
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
            <AllJournals item={item} handleToggle={()=>{handleToggle(item.key)}} journals={data} />
          )}>
        </FlatList>
        <NewTodo submitNewJournal={submitNewJournal}></NewTodo>
      </SafeAreaView>);
}
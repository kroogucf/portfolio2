import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function JournalMain(){
    return(<SafeAreaView style={styles.container}>
        <Text style={styles.title}>JOURNAL APP</Text>
        <FlatList
          data={data} 
          renderItem={({ item }) => (
            <AllTodos item={item} handleToggle={()=>{handleToggle(item.key)}} todos={data} />
          )}>
        </FlatList>
        <NewTodo submitNewTodo={submitNewTodo}></NewTodo>
      </SafeAreaView>);
}
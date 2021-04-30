import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import AllTodos from './AllTodos';
import NewTodo from './newTodo';


export default function MainTodo() {

  let [data, setNewTodos] = useState([
    {
      key: '1',
      completed: false,
      description: "Watch episode 3 of Falcon and the Winter Soldier",
      date: "two days ago",
    },
    {
      key: '2',
      completed: false,
      description: "Eat at Tin and Taco, because it is fantastic",
      date: "yesterday",
    },
    {
      key: '3',
      completed: false,
      description: "Watch Godzilla Vs Kong for a second time because why not",
      date: "this morning",
    },
  ]);

  useEffect(() => {console.log(data)}, [data])

  const handleToggle = (itemkey) => {

    const newData = data.map((item) => {

      if (item.key === itemkey) {
        const updateItem = {
          ...item,
          completed: !item.completed,
        };
        return updateItem;
      }

      return item;

    })

    setNewTodos(newData)

  }

  const submitNewTodo = (text, date) => {
    setNewTodos((prevTodos) => {
      return [
        { key: Math.random().toString(), completed:false, description: text, date: date},
        ...prevTodos
      ]
    })
  }

return (
    (<SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <FlatList
        data={data} 
        renderItem={({ item }) => (
          <AllTodos item={item} handleToggle={()=>{handleToggle(item.key)}} todos={data} />
        )}>
      </FlatList>
      <NewTodo submitNewTodo={submitNewTodo}></NewTodo>
    </SafeAreaView>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  title: {
    height: 80,
    paddingTop: 25,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

});

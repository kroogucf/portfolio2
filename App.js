import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import MainTodo from './components/MainTodo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

  function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Todos"
          onPress={() => props.navigation.navigate('Todos')}
        />
      </View>
    );
  }
  
  function TodosScreen(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Todos!</Text>
        <MainTodo />
        <Button
          title="Back to Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    );
  }
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Todos" component={TodosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
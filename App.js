import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/home";
import listaAtividades from "./pages/todolist";
import receitas from "./pages/receitas";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#7F77D3' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold'},
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="To Do List" component={listaAtividades}/>
        <Stack.Screen name="Lista de receitas" component={receitas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
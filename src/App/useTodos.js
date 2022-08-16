import { useState } from "react";
import {useLocalStorage} from './useLocalStorage'

const useTodos = () => {

  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItem: synchronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []); // custom hook
  
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const states = {
    error, 
    loading, 
    searchedTodos, 
    totalTodos, 
    completeTodo, 
    completedTodos,
    openModal,
    searchValue, 
  }

  const stateUpdaters = {
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    synchronizeTodos,
  }

  return { states, stateUpdaters }
}

export {useTodos}



import './App.css';
import { useState } from 'react'
import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar el curso de React', completed: true},
  {text:'Llorar con la llorona', completed: false},
];

function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

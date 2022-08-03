import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';

const AppUI = () => {
  
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
  }  = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch /> 
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUI
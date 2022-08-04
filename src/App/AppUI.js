import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../modal/Modal';
import TodoForm from '../components/TodoForm';
import { TodoEmpty } from '../components/TodoEmpty';
import { TodoError } from '../components/TodoError';
import { TodoLoading } from '../components/TodoLoading';
import '../styles/TodoIcon.css'
const AppUI = () => {
  
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  }  = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch /> 
      <TodoList>
        {error && <TodoError error= {error} /> }
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {/* uso la doble negacion para verificar no solo que exista, sino que sea true */}
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default AppUI
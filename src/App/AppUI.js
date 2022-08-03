import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../modal/Modal';
import TodoForm from '../components/TodoForm';

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
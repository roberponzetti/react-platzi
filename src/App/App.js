import React from 'react';
import './App.css';
import { useTodos } from './useTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { Modal } from '../modal/Modal';
import TodoForm from '../components/TodoForm';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { TodoEmpty } from '../components/TodoEmpty';
import '../styles/TodoIcon.css'
import { ChangeAlert } from '../components/ChangeAlert/ChangeAlert';

function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    synchronizeTodos,
  }  = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos= {totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue= {searchValue}
          setSearchValue={setSearchValue}
        /> 
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <TodoEmpty />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultado para {searchText} </p>
        )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {/* uso la doble negacion para verificar no solo que exista, sino que sea true */}
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      
      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert synchronize={synchronizeTodos} />
    </>
  )
}

export default App;

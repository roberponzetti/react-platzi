import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {addTodo, setOpenModal} = useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo todo</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type="submit"
          className='TodoForm-button TodoForm-button--add'
        >
          Agregar
        </button>
        <button
          type="button"
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default TodoForm
import React from 'react'
import '../styles/CreateTodoButton.css'

const CreateTodoButton = (props) => {

  const onClickButton = (msg) => {
    alert(msg);
  }
  
  return (
    <button className="CreateTodoButton"
            onClick={onClickButton}
    >
      +
    </button>
  )
}

export {CreateTodoButton}
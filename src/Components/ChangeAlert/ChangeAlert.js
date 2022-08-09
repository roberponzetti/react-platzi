import React from 'react'
import { useStorageListener } from './useStorageListener'
import '../../styles/ChangeAlert.css'

const ChangeAlert = ({synchronize}) => {

  const {show, toggleShow} = useStorageListener(synchronize);
  
  if(show){
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
        <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
        <p>¿Quieres sincronizar tus TODOs?</p>
        <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
        >
            Confirmar
        </button>
        </div>
      </div>
    )
  }else{
    return null;
  }
}

export { ChangeAlert }
import React, { useState } from 'react'

const useStorageListener = (synchronize) => {

  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (change) => {
    if(change.key === 'TODOS_V1'){
      console.log('Hubo cambios en TODOS_V1');
      setStorageChange(true);
    }
  })

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);

  }

  return {
    show: storageChange,
    toggleShow: toggleShow,
  }
}

export { useStorageListener }
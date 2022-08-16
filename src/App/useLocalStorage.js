import { useEffect, useReducer } from 'react'

const initialState = ({ initialValue })=>({
  synchronizedItem: true,
  loading: true,
  error: false,
  item :initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) =>({
  [actionTypes.error]: {
      ...state,
      error: true,
  },
  [actionTypes.success]:{
      ...state,
      error:false,
      synchronizedItem: true,
      loading: false,
      item: payload,
  },
  [actionTypes.save]:{
      ...state,
      item:payload
  },
  [actionTypes.synchronize]:{
      ...state,
      synchronizedItem: false,
      loading: true,
  },
});

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state;
}

const useLocalStorage = (itemName, initialValue) => {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const {
    synchronizedItem,
    loading,
    error,
    item,
  } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error});
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem});
  const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem});
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });

  useEffect(()=>{
    setTimeout( ()=>{
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem) {
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
      } else {
      parsedItem = JSON.parse(localStorageItem);
      }
      onSuccess(parsedItem);
    } catch (error) {
      onError(error);
    }
    },3000);
  },[synchronizedItem])

  const saveItem = (newItem) =>{
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  }

  const synchronizeItem = () =>{
    onSynchronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}

export {useLocalStorage}
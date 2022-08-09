import React from 'react'
import '../styles/TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue, loading}) => {

  const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
  }

  return (
    <>
      <input className="TodoSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
      />
      <p>{searchValue}</p>
    </>
  )
}

export {TodoSearch}
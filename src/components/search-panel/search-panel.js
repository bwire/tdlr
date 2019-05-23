import React from 'react'
import './search-panel.css'

const SearchPanel = ({onSearchChange}) => {
  const onValueChange = (e) => {
    onSearchChange(e.target.value);
  };
  
  return <input className="search-input form-control" placeholder="search" onChange={onValueChange} />
}

export default SearchPanel

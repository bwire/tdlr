import React from 'react'
import ToDoListItem from './todo-list-item'

const ToDoList = () => {
  return (
    <ul>
      <li><ToDoListItem label='Drink cofee' /></li>
      <li><ToDoListItem label='Build amazing app' important /></li>
    </ul>
  )
}

export default ToDoList

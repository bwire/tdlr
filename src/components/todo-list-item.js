import React from 'react'

const ToDoListItem = ({ label, important = false }) => {
  const style = {
    color : important ? 'tomato' : 'balck'
  }
  return <span style = { style }>{ label }</span>
}

export default ToDoListItem


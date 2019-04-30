import React from 'react'
import ReactDOM from 'react-dom'

const AppHeader = () => {
  return <h1>My ToDo List</h1>
}

const SearchPanel = () => {
  return <input placeholder='search' />
}

const ToDoList = () => {
  let items = ['Learn React', 'Build awesome app']  
  return (
    <ul>  
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  )
}

const App = () => {
  return (
    <div>  
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
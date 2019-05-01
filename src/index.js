import React from 'react'
<<<<<<< HEAD
import ReactDom from 'react-dom'

const el = (
  <div>
    <h1>My ToDo List</h1>
    <input placeholder='search' />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome app</li>
    </ul>
  </div>
)

ReactDom.render(el, document.getElementById('root'))
=======
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
>>>>>>> 2e1a5d355ade778ce86e6e5bc0902e15b3a0fcb3

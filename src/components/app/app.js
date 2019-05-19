import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: 'Drink cofee', important: false, id: 1 },
        { label: 'Make awesome app', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    }
  }

  addItem(text) {
    this.setState(({ todoData }) => {
      const newID = todoData.reduce((a, e) => Math.max(a, e.id), 0) + 1;
      const newTodo = [...todoData, { label: text, important: false, id: newID }];
      return {
        todoData: newTodo
      }
    });
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((e) => e.id === id);
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    });
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={todoData} onDeleted={id => this.deleteItem(id)} />
        <ItemAddForm onAddNew={(text) => this.addItem(text)} />
      </div>
    );
  }
}

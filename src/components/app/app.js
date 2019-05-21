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
        this.createTodoItem('Drink cofee'),
        this.createTodoItem('Make awesome app'),
        this.createTodoItem('Have a lunch')
      ]
    }; 
  }

  itemId = 0;

  // should be used inside setState() only
  itemIndexById(id) {
    return this.state.todoData.findIndex((e) => e.id === id);
  }

  createTodoItem(label) {
    return { 
      label: label, 
      important: false, 
      id: ++this.itemId, 
      done: false 
    };  
  }

  addItem(text) {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createTodoItem(text)]
      }
    });
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = this.itemIndexById(id);
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    });
  }

  onToggleImportant(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  toggleProperty(arr, id, property) {
    const idx = this.itemIndexById(id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [property]: !oldItem[property]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  render() {
    const { todoData } = this.state;
    const done = todoData.filter(e => e.done).length;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoData.length - done} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todos = {todoData} 
          onDeleted = {id => this.deleteItem(id)}
          onToggleImportant = {id => this.onToggleImportant(id)}
          onToggleDone = {id => this.onToggleDone(id)} 
        />
        <ItemAddForm onAddNew={(text) => this.addItem(text)} />
      </div>
    );
  }
}

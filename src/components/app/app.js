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
      ],
      term: '',
      filter: 'all'
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

  onSearchChange(term) {
    this.setState({ term })
  }

  onFilterChange(filter) {
    this.setState({ filter })
  }

  toggleProperty(arr, id, property) {
    const idx = this.itemIndexById(id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [property]: !oldItem[property]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  filteredToDos() {
    const searched = this.term === '' ? this.todoData : this.todoData.filter(item => item.label.toLowerCase().indexOf(this.term.toLowerCase()) > -1);
    return this.filter === 'all' || this.filter === '' ? searched : searched.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  render() {
    const { todoData, filter } = this.state;
    const done = todoData.filter(e => e.done).length;
    const filtered = this.filteredToDos.apply(this.state);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoData.length - done} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange = {term => this.onSearchChange(term)} />
          <ItemStatusFilter 
            filter = {filter}
            onFilterChange = {f => this.onFilterChange(f)} 
          />
        </div>
        <ToDoList
          todos = {filtered} 
          onDeleted = {id => this.deleteItem(id)}
          onToggleImportant = {id => this.onToggleImportant(id)}
          onToggleDone = {id => this.onToggleDone(id)} 
        />
        <ItemAddForm onAddNew={(text) => this.addItem(text)} />
      </div>
    );
  }
}

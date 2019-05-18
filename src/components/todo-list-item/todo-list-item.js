import React, { Component } from 'react'
import './todo-list-item.css'

export default class ToDoListItem extends Component {
  constructor() {
    super();

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
    };

    this.state = {
      done: false
    };
  }

  render() {
    const { label, important } = this.props;

    let classNames = 'todo-list-item';
    if (this.state.done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}

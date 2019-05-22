import React, { Component } from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      itemText: ''
    };
  }

  onTextChange(e) {
    this.setState({
      itemText: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAddNew(this.state.itemText);
    this.setState({
      itemText: ''
    });
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={e => this.onSubmit(e)}>
        <input type="text" className="form-control" onChange={e => this.onTextChange(e)} value={this.state.itemText} placeholder="What needs to be done"></input>
        <button type="button" className="btn btn-outline-secondary float-right">
            Add
        </button>
      </form>
    );
  }
}

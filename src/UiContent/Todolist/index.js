import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: "", // Input value
      list: [], // List of todos
      isEditing: false, // Editing mode flag
      editIndex: null, // Index of item being edited
    };
  }

  // Updates state with the current input
  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  // Adds or updates a todo item
  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, list, isEditing, editIndex } = this.state;

    if (todo.trim() === "") return;

    if (isEditing) {
      const updatedList = [...list];
      updatedList[editIndex] = todo;
      this.setState({
        list: updatedList,
        todo: "",
        isEditing: false,
        editIndex: null,
      });
    } else {
      this.setState((prevState) => ({
        list: [...prevState.list, todo],
        todo: "",
      }));
    }
  };

  // Deletes a todo by index
  handleDelete = (index) => {
    const updatedList = this.state.list.filter((_, i) => i !== index);
    this.setState({ list: updatedList });
  };

  // Prepares a todo for editing
  handleEdit = (index) => {
    this.setState({
      todo: this.state.list[index],
      isEditing: true,
      editIndex: index,
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Enter todo"
          />
          <button type="submit">
            {this.state.isEditing ? "Update" : "Add"}
          </button>
        </form>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;


// This code represents a full CRUD Todo List using React Class Components, ideal for mastering state management, user interaction, and React fundamentals.

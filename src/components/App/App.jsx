import React, { Component } from 'react';
import './App.css';
import { ToDoList } from '../ToDoList/ToDoList';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn English', completed: 'false' },
      { id: 'id-2', text: 'Learn JavaScript', completed: 'true' },
      { id: 'id-3', text: 'Learn React', completed: 'false' },
      { id: 'id-4', text: 'Learn Node.js', completed: 'false' },
      { id: 'id-5', text: 'Learn ReactNative', completed: 'false' },
      { id: 'id-6', text: 'Everyday Learning', completed: 'true' },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <h1 className="title">List of To Do Things</h1>

        <ToDoList todos={todos} deleteTodoClick={this.deleteToDo} />
      </div>
    );
  }
}

//todolist
import React, { Component } from 'react';
import ToDoItem from './todoitem.js';
import './App.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== "") {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: "",
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="todo-card">
        <div className="todo-list">
          <h2>ToDo List</h2>
          <div className="add-task">
            <input type="text" placeholder="Add a new task" value={newTask} onChange={this.handleInputChange}/>
            <button onClick={this.addTask}>Add Task</button>
          </div>
          <div>
            {tasks.map((task, index) => (
              <ToDoItem key={index} text={task} onDelete={() => this.deleteTask(index)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
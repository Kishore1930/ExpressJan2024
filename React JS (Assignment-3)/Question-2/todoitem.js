//todoitems
import React from 'react';

class ToDoItem extends React.Component {
  render() {
    const { text, onDelete } = this.props;

    return (
      <div className="todo-item">
        <span>{text}</span>
        <button className="delete-btn" onClick={onDelete}></button>
      </div>
    );
  }
}

export default ToDoItem;
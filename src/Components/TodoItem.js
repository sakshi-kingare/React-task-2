// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleCompletion }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={() => toggleCompletion(todo.id)}>{todo.task}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;

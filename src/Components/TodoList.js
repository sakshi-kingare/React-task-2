// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoApp from './TodoApp';

const TodoList = ({ todos, removeTodo, toggleCompletion }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;

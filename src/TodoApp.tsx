import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import './App.css';  // Path to the CSS file
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


// Define the Todo interface
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // State to manage the new todo text input
  const [newTodo, setNewTodo] = useState<string>('');

  // Function to add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(), // Using timestamp as unique ID
        text: newTodo,
        isCompleted: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Clear the input field after adding
    }
  };

  // Function to toggle the completion status of a todo
  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  // Function to delete a todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <h1>Todo App</h1>

      {/* Input to add a new todo */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          style={{ padding: '8px', width: '80%' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px', marginLeft: '10px' }}>
          Add Todo
        </button>
      </div>

      {/* Render the list of TodoListItems */}
      <div>
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;

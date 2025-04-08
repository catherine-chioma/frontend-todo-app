// src/components/TodoListItem.tsx
import React from 'react';

// Define the prop types for TodoListItem component
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;  // Changed from 'isCompleted' to 'completed'
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoListItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggleComplete, onDelete }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <input 
        type="checkbox" 
        checked={completed}  // Use 'completed' here
        onChange={() => onToggleComplete(id)} 
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoListItem;



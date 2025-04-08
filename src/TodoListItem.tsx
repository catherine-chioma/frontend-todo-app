import React, { FC } from 'react';

// Define the type for the TodoListItem props
interface TodoListItemProps {
  id: number;  // Ensure `id` is part of the props
  text: string;
  isCompleted: boolean;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ id, text, isCompleted, onToggleComplete, onDelete }) => {
  return (
    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      {/* Checkbox to toggle completion */}
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={() => onToggleComplete(id)} 
      />
      
      {/* Todo text */}
      <span 
        style={{ 
          textDecoration: isCompleted ? 'line-through' : 'none',
          marginLeft: '10px',
          flex: 1
        }}
      >
        {text}
      </span>
      
      {/* Delete button */}
      <button 
        onClick={() => onDelete(id)} 
        style={{ marginLeft: '10px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoListItem;

import React from 'react';

// Define the type for TodoItem
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoListItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-list-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}  // Toggle completion state
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          marginLeft: '10px',
        }}
      >
        {text}
      </span>
      <button onClick={() => onDelete(id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoListItem;

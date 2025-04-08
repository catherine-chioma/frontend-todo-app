// src/components/TodoForm.tsx
import React from 'react';

interface TodoFormProps {
  newTodo: string;
  onAddTodo: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ newTodo, onAddTodo, onChange }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={newTodo}
        onChange={onChange}
        placeholder="Enter a new todo"
        style={{ padding: '8px', width: '80%' }}
        aria-label="Todo input"
      />
      <button onClick={onAddTodo} style={{ padding: '8px', marginLeft: '10px' }}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;

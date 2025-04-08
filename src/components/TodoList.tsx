// src/components/TodoList.tsx
import React from 'react';
import TodoListItem from './TodoListItem';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.isCompleted} // Change 'isCompleted' to 'completed'
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default TodoList;





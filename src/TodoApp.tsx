import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext'; // Import useAuth hook
import { db } from './firebase'; // Import Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Button, TextField, Typography, List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from 'firebase/auth'; // Import User from firebase/auth

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const { user, logout } = useAuth(); // Use the custom hook to get user and logout functions
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Fetch todos from Firestore
  const fetchTodos = async () => {
    const todosRef = collection(db, 'todos');
    const querySnapshot = await getDocs(todosRef);
    const todosList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Todo[];
    setTodos(todosList);
  };

  useEffect(() => {
    if (user) {
      fetchTodos(); // Fetch todos only if the user is logged in
    }
  }, [user]); // Re-fetch todos when the user changes

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addDoc(collection(db, 'todos'), {
          text: newTodo,
          isCompleted: false,
        });
        setNewTodo(''); // Reset the input field after adding
        fetchTodos(); // Re-fetch todos to include the new one
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  const handleToggleComplete = async (id: string, currentStatus: boolean) => {
    const todoRef = doc(db, 'todos', id);
    try {
      await updateDoc(todoRef, {
        isCompleted: !currentStatus,
      });
      fetchTodos(); // Re-fetch todos to reflect changes
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleDelete = async (id: string) => {
    const todoRef = doc(db, 'todos', id);
    try {
      await deleteDoc(todoRef);
      fetchTodos(); // Re-fetch todos after deletion
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Todo App
      </Typography>

      {/* Conditional rendering based on authentication state */}
      {user ? (
        <>
          <Typography variant="h6" align="center" gutterBottom>
            Welcome, {user.displayName || user.email}
          </Typography>
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>

          {/* Todo input and button only show when the user is logged in */}
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <TextField
              label="Enter a new todo"
              variant="outlined"
              fullWidth
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTodo}
              disabled={!newTodo.trim()} // Disable button if input is empty
            >
              Add Todo
            </Button>
          </div>

          {/* Display the list of todos */}
          <List>
            {todos.length > 0 ? (
              todos.map(todo => (
                <ListItem
                  key={todo.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ListItemText
                    primary={todo.text}
                    style={{
                      textDecoration: todo.isCompleted ? 'line-through' : 'none',
                      color: todo.isCompleted ? '#888' : '#000',
                    }}
                  />
                  <div>
                    <Checkbox
                      checked={todo.isCompleted}
                      onChange={() => handleToggleComplete(todo.id, todo.isCompleted)}
                      color="primary"
                    />
                    <IconButton onClick={() => handleDelete(todo.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </ListItem>
              ))
            ) : (
              <Typography variant="body1" align="center">
                No todos available
              </Typography>
            )}
          </List>
        </>
      ) : (
        <>
          {/* If user is not logged in, show login prompt */}
          <Typography variant="h6" align="center" gutterBottom>
            Please log in to manage your todos
          </Typography>
          <Button variant="contained" color="primary" onClick={() => console.log('Redirect to login')}>
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default TodoApp;













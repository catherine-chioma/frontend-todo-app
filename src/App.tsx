// src/App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import TodoApp from './TodoApp'; // Import the TodoApp component

const App: React.FC = () => {
  return (
    <AuthProvider> {/* Wrap TodoApp with AuthProvider */}
      <div style={{ fontFamily: 'Arial', textAlign: 'center' }}>
        <h1>Welcome to the Todo App</h1>
        <TodoApp /> {/* Render the TodoApp component */}
      </div>
    </AuthProvider>
  );
};

export default App;


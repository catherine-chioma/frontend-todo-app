import React, { useState } from 'react';
import { useAuth } from './context/AuthContext'; // Ensure correct import path
import { TextField, Button, Typography } from '@mui/material';

const Signup: React.FC = () => {
  const { signup } = useAuth(); // Destructure signup from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;


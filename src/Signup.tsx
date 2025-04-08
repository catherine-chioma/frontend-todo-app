import React, { useState } from 'react';
import { useAuth } from './context/AuthContext'; // Ensure correct import path
import { TextField, Button, Typography } from '@mui/material';
import firebase from 'firebase/app'; // Import Firebase if not already imported

const Signup: React.FC = () => {
  const { signup } = useAuth(); // Destructure signup from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); // To display any error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset any previous errors

    try {
      // Call the signup function from your AuthContext
      await signup(email, password);
    } catch (error: any) {
      // Display any error from the signup process
      setError(error.message || 'Error signing up');
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
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;



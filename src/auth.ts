import { auth } from './firebase'; // Firebase initialization
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

// Sign up function
export const signUp = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    // Check if the error is an instance of the Error class
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    throw new Error(errorMessage);  // Throw a more descriptive error
  }
};

// Sign in function
export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    // Check if the error is an instance of the Error class
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    throw new Error(errorMessage);  // Throw a more descriptive error
  }
};

// Sign out function
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    // Check if the error is an instance of the Error class
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    throw new Error(errorMessage);  // Throw a more descriptive error
  }
};




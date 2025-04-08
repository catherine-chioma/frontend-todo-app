// index.tsx
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import { FirebaseAppProvider } from "reactfire"; // Import FirebaseAppProvider
import App from "./App"; // Import App component
import { firebaseConfig } from './firebase'; 

import "./styles.css"; // Optional: If you have some global styles

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); // Create root for React 18+

root.render(
  <StrictMode>
    {/* Wrap the app in the FirebaseAppProvider to make Firebase available throughout the app */}
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </StrictMode>
);



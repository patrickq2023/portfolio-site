import React from 'react';
import { createRoot } from 'react-dom';
import App from './App'; // Import your main App component

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

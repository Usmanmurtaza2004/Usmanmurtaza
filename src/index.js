import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './App';

// Ensure the root element exists
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

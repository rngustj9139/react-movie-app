import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, root)와 같다.
    <App />
);

reportWebVitals();

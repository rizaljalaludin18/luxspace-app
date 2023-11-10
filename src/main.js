import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePages from './pages/HomePages.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Route path="/" component={HomePages} />
  </Router>,
);

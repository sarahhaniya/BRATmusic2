import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*BrowserRouter is a React Router component that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. It's crucial for enabling dynamic client-side routing, allowing parts of the page to update according to the path in the URL without requiring a page reload.*/
import MainView from './views/MainView';

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </Router>
  );
}

export default App;

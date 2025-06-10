import React, { useState } from 'react';

import CardHeader from './components/CardHeader.jsx';
import CardBody from './components/CardBody.jsx';
import CardFooter from './components/CardFooter.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="card">
        <div className="toggle-container">
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label='Toggle theme'
          >
           <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
    </div>
  );
};

export default App;

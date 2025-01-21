import React from 'react';
import Weather from  './weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather/>
      <footer>
        This React App was coded by Nevermann and
        is opensourced in <a href='https://github.com/Mary-clouds/new-react-project' target='blank'>
          GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}



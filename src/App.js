import React from 'react';
import Weather from  './Weatherapp';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity = "Berlin"/>
      <footer>
        This React App was coded by Nevermann and
        is opensourced in <a href='https://github.com/Mary-clouds/new-react-project' target='blank' rel='noopener noreferrer'>
          GitHub
        </a> and hosted on <a href='' target='blank' rel='noopener noreferrer'> Netlify</a>
      </footer>
      </div>
    </div>
  );
}



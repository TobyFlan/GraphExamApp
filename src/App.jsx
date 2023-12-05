import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import { Link as RouterLink } from 'react-router-dom';

const GoButton = (props) => {
  return (
    <>
      <RouterLink to={props.to}>
        <button>{props.text}</button>
      </RouterLink>
    </>
  );
};


const App = () => {
  return (
    <>
      <div>
        <h1>Press the button to begin the test</h1>
        <GoButton to="/disclaimer" text={"we move"}></GoButton>
      </div>
    </>
  );
};

export default App;
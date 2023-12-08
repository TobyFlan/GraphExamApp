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

        <h1>Information Vizualisation Survey</h1>

        <h3>Press the button to continue.</h3>

        <GoButton to="/disclaimer" text={"Disclaimer"}></GoButton>
      </div>
    </>
  );
};

export default App;
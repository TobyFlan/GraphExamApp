import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Disclaimer from './Disclaimer.jsx';
import Question from './Question.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/disclaimer" element={<Disclaimer></Disclaimer>} />
      <Route path="/question" element={<Question></Question>} />
    </Routes>
  </Router>,
);

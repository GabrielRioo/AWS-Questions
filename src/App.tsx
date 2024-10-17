import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import QuestionsPage from './pages/QuestionPage/QuestionPage';

const App: React.FC = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

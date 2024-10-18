import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import QuestionsPage from './pages/QuestionPage/QuestionPage';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import ResultPage from './pages/ResultPage/ResultPage';

const App: React.FC = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

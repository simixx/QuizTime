import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Do you want this internship?",
      options: ["No", "Maybe", "Yes", "Absolutely Not"],
      correctAnswer: "Yes",
    },
    {
      question: "Do you really want to work here?",
      options: ["Not Sure", "I'll Think About It", "Yes", "Not Really"],
      correctAnswer: "Yes",
    },
    {
      question: "Are you a good developer?",
      options: ["Not Really", "Sometimes", "Yes", "I Try My Best"],
      correctAnswer: "Yes",
    },
    {
      question: "Are you excited about this project?",
      options: ["Not At All", "Kind Of", "Yes", "Very Much"],
      correctAnswer: "Yes",
    },
    {
      question: "Do you think you can handle the challenges ahead?",
      options: ["No", "I Hope So", "Yes", "Bring It On"],
      correctAnswerr: "Yes",
    },
  ];

  const startQuiz = () => setScreen('quiz');
  const endQuiz = (finalScore) => {
    setScore(finalScore);
    setScreen('results');
  };
  const retakeQuiz = () => {
    setScore(0);
    setScreen('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      {screen === 'welcome' && <Welcome onStart={startQuiz} />}
      {screen === 'quiz' && <Quiz questions={questions} onEnd={endQuiz} />}
      {screen === 'results' && <Results score={score} total={questions.length} onRetake={retakeQuiz} />}
    </div>
  );
};

export default App;
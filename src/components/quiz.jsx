import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = ({ questions, onEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [feedback, setFeedback] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleAnswer(null); // Handle timeout scenario
    }
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    const correct = questions[currentQuestion].correctAnswer;
    if (answer === correct) {
      setScore(score + 1);
      setFeedback('Correct!');
      setCorrectAnswer('correct');
    } else {
      setFeedback('Incorrect!');
      setCorrectAnswer('incorrect');
    }

    setTimeout(() => {
      setFeedback('');
      setCorrectAnswer('');
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(30);
      } else {
        onEnd(score);
      }
    }, 1500); // Delay for feedback display
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-3xl">
        <div className="mb-4 bg-purple-700 rounded-full">
          <motion.div 
            className="bg-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div 
          className="bg-gradient-to-r from-pink-900 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition duration-300rounded-lg p-6 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-200">{questions[currentQuestion]?.question}</h2>
          <div className="text-right text-xl font-bold text-yellow-300">{timeLeft}s</div>
        </motion.div>
        <div className="relative">
          {feedback && (
            <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${correctAnswer === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
              <div className="text-9xl font-bold">{correctAnswer === 'correct' ? '🎉' : '😔'}</div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <AnimatePresence>
            {questions[currentQuestion]?.options.map((option, index) => (
              <motion.button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`bg-gradient-to-r from-pink-900 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition duration-300 ${
                  correctAnswer === 'correct' && option === questions[currentQuestion].correctAnswer ? 'bg-green-500' : ''
                } ${
                  correctAnswer === 'incorrect' && option !== questions[currentQuestion].correctAnswer ? 'bg-red-500' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {option}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

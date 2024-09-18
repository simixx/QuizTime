import React from 'react';
import { motion } from 'framer-motion';

const Results = ({ score, total, onRetake }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-purple-600 to-indigo-800">
    <motion.h2 
      className="text-4xl font-bold mb-6 text-pink-300"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Quiz Completed!
    </motion.h2>
    <motion.div 
      className="text-6xl font-bold mb-8 text-yellow-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {score} / {total}
    </motion.div>
    <motion.div 
      className="bg-purple-700 rounded-lg p-6 mb-8 w-full max-w-md"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-pink-200">Leaderboard</h3>
      <div className="space-y-4">
        {[
          { name: 'You', score: score },
          { name: 'AI Intern 1', score: Math.floor(Math.random() * total) },
          { name: 'AI Intern 2', score: Math.floor(Math.random() * total) },
        ].sort((a, b) => b.score - a.score).map((player, index) => (
          <motion.div 
            key={index} 
            className="flex justify-between items-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
          >
            <span className="text-xl text-pink-200">{player.name}</span>
            <span className="text-xl font-bold text-yellow-300">{player.score}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <div className="space-x-4">
      <motion.button
        onClick={onRetake}
        className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.3 }}
      >
        Retake Quiz
      </motion.button>
      <motion.button
        onClick={() => window.location.reload()}
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      >
        New Game
      </motion.button>
    </div>
  </div>
);

export default Results;
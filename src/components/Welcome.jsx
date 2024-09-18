import React from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-purple-600 to-indigo-800">
    <motion.h1 
      className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      QuizTime
    </motion.h1>
    <motion.p 
      className="text-2xl mb-8 text-pink-200"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      Prove You're the Perfect Intern!
    </motion.p>
    <div className="flex space-x-4 mb-8">
      {['💼', '🚀', '💡', '🔍'].map((emoji, index) => (
        <motion.span 
          key={index} 
          className="text-5xl"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
    <motion.button
      onClick={onStart}
      className="mt-8 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 hover:from-pink-600 hover:to-yellow-600 hover:scale-105 transform"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      Start Quiz
    </motion.button>
  </div>
);

export default Welcome;
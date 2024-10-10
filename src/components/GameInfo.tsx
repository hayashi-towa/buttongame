import React from 'react';
import { motion } from 'framer-motion';

interface GameInfoProps {
  score: number;
  timeLeft: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ score, timeLeft }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto mb-4">
      <motion.div
        className="text-2xl font-bold text-blue-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        Score: {score}
      </motion.div>
      <div className="text-2xl font-bold text-red-500">
        Time: {Math.ceil(timeLeft / 1000)}s
      </div>
    </div>
  );
};

export default GameInfo;
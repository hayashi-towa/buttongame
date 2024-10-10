import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Home } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  difficulty: string;
  onRetry: () => void;
  onBackToMenu: () => void;  // 新しいプロップを追加
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  difficulty,
  onRetry,
  onBackToMenu,  // 新しいプロップを追加
}) => {
  const shareScore = () => {
    const text = `I scored ${score} points on ${difficulty} mode in ピカピカボタンマスター! Can you beat my score? #ピカピカボタンマスター`;
    const url = 'https://pikapika-button-master.com'; // Replace with actual URL when deployed
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-6 bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-white mb-4">Game Over!</h2>
      <p className="text-3xl text-blue-400">Your Score: {score}</p>
      <p className="text-xl text-gray-300">Difficulty: {difficulty}</p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-colors"
          onClick={onRetry}
        >
          Retry
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center"
          onClick={shareScore}
        >
          <Share2 className="mr-2" />
          Share Score
        </button>
        <button
          className="px-6 py-3 bg-purple-500 text-white rounded-full text-lg font-bold shadow-lg hover:bg-purple-600 transition-colors flex items-center"
          onClick={onBackToMenu}
        >
          <Home className="mr-2" />
          Back to Menu
        </button>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
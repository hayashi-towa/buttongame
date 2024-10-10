import React from 'react';
import { Difficulty } from '../types';

interface GameControlsProps {
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onStartGame: () => void;
  isGameRunning: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({
  difficulty,
  onDifficultyChange,
  onStartGame,
  isGameRunning,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        {(['easy', 'normal', 'hard'] as Difficulty[]).map((d) => (
          <button
            key={d}
            className={`px-4 py-2 rounded-full ${
              difficulty === d
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => onDifficultyChange(d)}
            disabled={isGameRunning}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-colors"
        onClick={onStartGame}
        disabled={isGameRunning}
      >
        {isGameRunning ? 'Game in Progress' : 'Start Game'}
      </button>
    </div>
  );
};

export default GameControls;
import React from 'react';
import Button from './Button';
import { Difficulty } from '../types';

interface GameBoardProps {
  difficulty: Difficulty;
  activeButton: number | null;
  onButtonClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  difficulty,
  activeButton,
  onButtonClick,
}) => {
  const gridSize = difficulty === 'easy' ? 3 : difficulty === 'normal' ? 4 : 5;
  const buttons = Array(gridSize * gridSize).fill(null);

  return (
    <div
      className={`grid gap-2 w-full max-w-md mx-auto`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        aspectRatio: '1 / 1',
      }}
    >
      {buttons.map((_, index) => (
        <Button
          key={index}
          isActive={activeButton === index}
          onClick={() => onButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
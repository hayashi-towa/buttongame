import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import GameInfo from './components/GameInfo';
import ResultScreen from './components/ResultScreen';
import { Difficulty, GameState } from './types';
import {
  difficultySettings,
  GAME_DURATION,
  WRONG_CLICK_PENALTY,
} from './utils/gameSettings';

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: GAME_DURATION,
    activeButton: null,
    isGameOver: true,
  });

  const startGame = useCallback(() => {
    setGameState({
      score: 0,
      timeLeft: GAME_DURATION,
      activeButton: null,
      isGameOver: false,
    });
  }, []);

  const backToMenu = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isGameOver: true,
      score: 0,
    }));
  }, []);

  const updateActiveButton = useCallback(() => {
    const settings = difficultySettings[difficulty];
    const newActiveButton = Math.floor(Math.random() * settings.buttonCount);
    setGameState((prev) => ({ ...prev, activeButton: newActiveButton }));

    setTimeout(() => {
      setGameState((prev) => ({ ...prev, activeButton: null }));
    }, settings.lightDuration);
  }, [difficulty]);

  useEffect(() => {
    if (gameState.isGameOver) return;

    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeLeft <= 0) {
          clearInterval(timer);
          return { ...prev, isGameOver: true };
        }
        return { ...prev, timeLeft: prev.timeLeft - 100 };
      });
    }, 100);

    const buttonTimer = setInterval(() => {
      updateActiveButton();
    }, difficultySettings[difficulty].lightInterval);

    return () => {
      clearInterval(timer);
      clearInterval(buttonTimer);
    };
  }, [gameState.isGameOver, difficulty, updateActiveButton]);

  const handleButtonClick = (index: number) => {
    if (gameState.isGameOver) return;

    if (index === gameState.activeButton) {
      setGameState((prev) => ({
        ...prev,
        score: prev.score + 1,
        activeButton: null,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        score: Math.max(0, prev.score - WRONG_CLICK_PENALTY),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        ピカピカボタンマスター
      </motion.h1>

      {!gameState.isGameOver && (
        <GameInfo
          score={gameState.score}
          timeLeft={gameState.timeLeft}
        />
      )}

      <GameBoard
        difficulty={difficulty}
        activeButton={gameState.activeButton}
        onButtonClick={handleButtonClick}
      />

      {gameState.isGameOver ? (
        gameState.score > 0 ? (
          <ResultScreen
            score={gameState.score}
            difficulty={difficulty}
            onRetry={startGame}
            onBackToMenu={backToMenu}
          />
        ) : (
          <GameControls
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            onStartGame={startGame}
            isGameRunning={!gameState.isGameOver}
          />
        )
      ) : null}
    </div>
  );
}

export default App;
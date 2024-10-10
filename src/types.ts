export type Difficulty = 'easy' | 'normal' | 'hard';

export interface GameSettings {
  buttonCount: number;
  lightDuration: number;
  lightInterval: number;
}

export interface GameState {
  score: number;
  timeLeft: number;
  activeButton: number | null;
  isGameOver: boolean;
}
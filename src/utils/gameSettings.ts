import { Difficulty, GameSettings } from '../types';

export const difficultySettings: Record<Difficulty, GameSettings> = {
  easy: {
    buttonCount: 9,
    lightDuration: 2000,  // 2500から2000に変更
    lightInterval: 1500,  // 1800から1500に変更
  },
  normal: {
    buttonCount: 16,
    lightDuration: 1800,  // 2000から1500に変更
    lightInterval: 1200,  // 1300から1000に変更
  },
  hard: {
    buttonCount: 25,
    lightDuration: 1300,  // 1500から1000に変更
    lightInterval: 1000,   // 1000から800に変更
  },
};

export const GAME_DURATION = 30000;
export const WRONG_CLICK_PENALTY = 1;

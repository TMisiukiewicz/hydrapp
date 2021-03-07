import { React } from 'react';

export interface UserContextType {
  goal: number;
  today: number;
  setGoal: React.SetStateAction<number>;
  dailyPercentage: number;
  onAddNewRecord: (value: number) => void;
}

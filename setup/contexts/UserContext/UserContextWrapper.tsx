import React, { useState } from 'react';
import { UserContextProvider } from '.';

const UserContextWrapper: React.FC = ({ children }) => {
  const [goal, setGoal] = useState(1800);
  const [today, setToday] = useState(0);

  const dailyPercentage = Math.round((today / goal) * 100);

  const onAddNewRecord = (value: number) =>
    setToday(prevValue => prevValue + value);

  return (
    <UserContextProvider
      value={{ goal, setGoal, today, dailyPercentage, onAddNewRecord }}
    >
      {children}
    </UserContextProvider>
  );
};

export default UserContextWrapper;

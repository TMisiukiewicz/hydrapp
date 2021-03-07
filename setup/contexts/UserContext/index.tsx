import { createContext, useContext } from 'react';
import noop from 'lodash/noop';
import { UserContextType } from './types';

const UserContext = createContext<UserContextType>({
  goal: 0,
  today: 0,
  setGoal: noop,
  dailyPercentage: 0,
  onAddNewRecord: noop,
});

export const UserContextProvider = UserContext.Provider;
export const useUserContext = (): UserContextType => useContext(UserContext);

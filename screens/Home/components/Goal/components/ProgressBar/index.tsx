import React from 'react';
import { useUserContext } from '../../../../../../setup/contexts/UserContext';
import { BackgroundBar, ForegroundBar, ProgressBarContainer } from './styles';

const ProgressBar: React.FC = () => {
  const { dailyPercentage } = useUserContext();

  return (
    <ProgressBarContainer>
      <BackgroundBar />
      <ForegroundBar percentage={dailyPercentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

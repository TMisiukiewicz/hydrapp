import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useUserContext } from '../../../../setup/contexts/UserContext';
import { Heading, Paragraph, SubHeading } from '../../../../setup/ui/styles';
import theme from '../../../../setup/ui/theme';
import ProgressBar from './components/ProgressBar';
import { GoalContainer } from './styles';

const Goal: React.FC = () => {
  const { goal, dailyPercentage } = useUserContext();

  return (
    <GoalContainer>
      <Paragraph>
        <FormattedMessage id='home.dailyGoal' defaultMessage='Daily goal:' />
      </Paragraph>
      <Heading color={theme.colors.blue}>
        <FormattedMessage
          id='home.goalMl'
          defaultMessage='{value} ml'
          values={{ value: goal }}
        />
      </Heading>
      <ProgressBar />
      <SubHeading>{`${dailyPercentage}%`}</SubHeading>
    </GoalContainer>
  );
};

export default Goal;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Paragraph } from '../../../../setup/ui/styles';
import theme from '../../../../setup/ui/theme';
import { GoalContainer } from './styles';

const Goal: React.FC = () => {
  return (
    <GoalContainer>
      <Paragraph>
        <FormattedMessage id='home.dailyGoal' defaultMessage='Daily goal:' />
      </Paragraph>
      <Heading color={theme.colors.blue}>
        <FormattedMessage
          id='home.goalMl'
          defaultMessage='{value} ml'
          values={{ value: 1800 }}
        />
      </Heading>
    </GoalContainer>
  );
};

export default Goal;

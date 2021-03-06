import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '../../../../setup/ui/styles';
import { SubheadingText } from './styles';

const MainTitle: React.FC = () => {
  return (
    <>
      <Heading>
        <FormattedMessage
          id='home.welcomeMessage'
          defaultMessage='Hello {name}!'
          values={{ name: 'Emily' }}
        />
      </Heading>
      <SubheadingText>
        <FormattedMessage
          id='home.howMuchWater'
          defaultMessage='How much water will you drink today?'
        />
      </SubheadingText>
    </>
  );
};

export default MainTitle;

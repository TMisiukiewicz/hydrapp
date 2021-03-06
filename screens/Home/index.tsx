import React from 'react';
import Goal from './components/Goal';
import MainTitle from './components/MainTitle';
import { ScreenContainer } from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bgImage = require('../../assets/homescreen-bg.png');

const Home: React.FC = () => {
  return (
    <ScreenContainer source={bgImage}>
      <MainTitle />
      <Goal />
    </ScreenContainer>
  );
};

export default Home;

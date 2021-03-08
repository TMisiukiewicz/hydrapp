import React from 'react';
import AddMore from './components/AddMore';
import Droplet from './components/Droplet';
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
      <Droplet />
      <AddMore />
    </ScreenContainer>
  );
};

export default Home;

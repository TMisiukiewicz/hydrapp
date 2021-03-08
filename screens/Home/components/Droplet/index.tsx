import React from 'react';
import { useUserContext } from '../../../../setup/contexts/UserContext';
import useDroplet from './hooks';
import { DropletContainer, DropletNumber, DropletWrapper } from './styles';

const Droplet: React.FC = () => {
  const { today } = useUserContext();
  const { valueFormatter } = useDroplet();

  return (
    <DropletContainer>
      <DropletWrapper>
        <DropletNumber value={today} formatter={valueFormatter} />
      </DropletWrapper>
    </DropletContainer>
  );
};

export default Droplet;

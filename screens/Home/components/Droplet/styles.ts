import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import AnimateNumber, { AnimateNumberProps } from 'react-native-animate-number';
import { Heading } from '../../../../setup/ui/styles';

export const DropletContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropletWrapper: React.FC<ViewProps> = styled.View`
  margin-top: 75px;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 160px;
  border-top-right-radius: 160px;
  border-bottom-left-radius: 160px;
  border: 3px solid ${props => props.theme.colors.darkBlue};
  transform: rotate(225deg);
  background-color: white;
`;

export const DropletNumber: React.FC<AnimateNumberProps> = styled(
  AnimateNumber
)`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: ${props => props.color || props.theme.colors.text};
  transform: rotate(135deg);
`;

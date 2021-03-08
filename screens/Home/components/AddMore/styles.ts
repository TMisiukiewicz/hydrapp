import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const AddNewSection = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 0px;
`;

export const AddNewRecordButton: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
  height: 65px;
  width: 65px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

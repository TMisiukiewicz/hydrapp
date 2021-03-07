import styled from 'styled-components/native';
import { QuantityListItemProps, QuantityListTextProps } from './types.d';

export const QuantityListContainer = styled.View`
  margin-top: 15px;
`;

export const QuantityListItem: React.FC<QuantityListItemProps> = styled.TouchableOpacity`
  text-align: center;
  width: 115px;
  background-color: ${props =>
    props.active ? props.theme.colors.lightBlue : 'transparent'};
  padding: 15px 30px;
  border-radius: 30px;
`;

export const QuantityListText: React.FC<QuantityListTextProps> = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: ${props => (props.active ? 'white' : props.theme.colors.darkBlue)};
  opacity: ${props => (props.active ? '1' : '0.54')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-align: center;
`;

export default {};

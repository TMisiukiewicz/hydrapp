import styled from 'styled-components/native';
import { TextProps } from 'react-native';

export const SubheadingText: React.FC<TextProps> = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

export default {};

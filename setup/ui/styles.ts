import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { HeadingProps } from './types.d';

export const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Heading: React.FC<HeadingProps> = styled.Text`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: ${props => props.color || props.theme.colors.text};
`;

export const SubHeading: React.FC<TextProps> = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.text};
`;

export const Paragraph = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.text};
`;

export default { SafeAreaWrapper };

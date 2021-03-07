import { TextProps, ViewProps } from 'react-native';
import { ThemeColors } from './enums';

export interface HeadingProps extends TextProps {
  color?: string;
}
export interface Theme {
  colors: { [key: ThemeColors]: string };
}

export type ThemedView = ViewProps & Theme;
export type ThemedText = TextProps & Theme;

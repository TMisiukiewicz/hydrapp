import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaWrapper } from './styles';
import theme from './theme';

const UiWrapper: React.FC = ({ children }) => {
  return (
    <SafeAreaWrapper>
      <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
    </SafeAreaWrapper>
  );
};

export default UiWrapper;

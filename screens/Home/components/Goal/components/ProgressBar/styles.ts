import React from 'react';
import styled from 'styled-components/native';
import { ThemedView } from '../../../../../../setup/ui/types';
import { ForegroundBarProps } from './types';

export const ProgressBarContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const BackgroundBar = styled.View<ThemedView>`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.colors.darkBlue};
  opacity: 0.08;
  border-radius: 50px;
`;

export const ForegroundBar: React.FC<ForegroundBarProps> = styled.View`
  height: 4px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 50px;
  position: absolute;
  top: -1px;
`;

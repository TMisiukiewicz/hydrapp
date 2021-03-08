import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useUserContext } from '../../../../../../setup/contexts/UserContext';
import { ANIMATION_TIMING } from '../../../../../../utils/consts';
import { BackgroundBar, ForegroundBar, ProgressBarContainer } from './styles';
import { ForegroundBarProps } from './types';

const ProgressBar: React.FC = () => {
  const { dailyPercentage } = useUserContext();
  const progressWidth = useRef(new Animated.Value(dailyPercentage)).current;

  const AnimatedForegroundBar: Animated.AnimatedComponent<
    React.FC<ForegroundBarProps>
  > = Animated.createAnimatedComponent(ForegroundBar);

  useEffect(() => {
    Animated.timing(progressWidth, {
      toValue: dailyPercentage,
      duration: ANIMATION_TIMING,
      useNativeDriver: false,
    }).start();
  }, [dailyPercentage, progressWidth]);

  return (
    <ProgressBarContainer>
      <BackgroundBar />
      <AnimatedForegroundBar
        style={{
          width:
            dailyPercentage < 100
              ? progressWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                })
              : '100%',
        }}
        percentage={dailyPercentage}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

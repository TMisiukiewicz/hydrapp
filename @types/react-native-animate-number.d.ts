declare module 'react-native-animate-number' {
  type TimingFunction = () => number;

  export interface AnimateNumberProps {
    value: number;
    countBy?: number;
    interval?: number;
    steps?: number;
    timing?: 'linear' | 'easeOut' | 'easeIn' | TimingFunction;
    formatter?: (value: number) => string;
    renderContent?: (displayValue: number) => React.Node;
    onProgress?: VoidFunction;
    onFinish?: VoidFunction;
  }

  declare const AnimateNumber: React.FC<AnimateNumberProps>;

  export default AnimateNumber;
}

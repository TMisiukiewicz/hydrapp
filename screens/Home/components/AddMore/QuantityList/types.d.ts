import { TouchableOpacityProps, TextProps } from 'react-native';

export interface QuantityListProps {
  selectedValue: number;
  onChangeValue: (value: number) => void;
}

export interface QuantityListItemProps extends TouchableOpacityProps {
  active: boolean;
}

export interface QuantityListTextProps extends TextProps {
  active: boolean;
}

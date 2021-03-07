import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { FlatList } from 'react-native-gesture-handler';
import {
  QuantityListContainer,
  QuantityListItem,
  QuantityListText,
} from './styles';
import { QuantityListProps } from './types';

const QuantityList: React.FC<QuantityListProps> = ({
  selectedValue,
  onChangeValue,
}) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <QuantityListItem
          active={item === selectedValue}
          disabled={item === selectedValue}
          onPress={() => onChangeValue(item)}
        >
          <QuantityListText active={item === selectedValue}>
            <FormattedMessage id='home.goalMl' values={{ value: item }} />
          </QuantityListText>
        </QuantityListItem>
      );
    },
    [onChangeValue, selectedValue]
  );

  return (
    <QuantityListContainer>
      <FlatList
        horizontal
        data={[100, 200, 300, 400, 500, 600, 700, 800]}
        keyExtractor={item => item.toString()}
        {...{ renderItem }}
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      />
    </QuantityListContainer>
  );
};

export default QuantityList;

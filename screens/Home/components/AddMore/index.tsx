import React, { useState } from 'react';
import { AddNewRecordButton, AddNewSection } from './styles';
import PlusIcon from '../../../../assets/icons/add.svg';
import QuantityList from './QuantityList';
import { useUserContext } from '../../../../setup/contexts/UserContext';

const AddMore: React.FC = () => {
  const [activeItem, setActiveItem] = useState(200);
  const { onAddNewRecord } = useUserContext();

  const onChangeValue = (value: number) => setActiveItem(value);

  const onAdd = () => onAddNewRecord(activeItem);

  return (
    <AddNewSection>
      <AddNewRecordButton onPress={onAdd}>
        <PlusIcon />
      </AddNewRecordButton>
      <QuantityList selectedValue={activeItem} {...{ onChangeValue }} />
    </AddNewSection>
  );
};

export default AddMore;

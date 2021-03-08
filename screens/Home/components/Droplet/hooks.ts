import { UseDropletReturnType } from './types';

const useDroplet = (): UseDropletReturnType => {
  const valueFormatter = (value: number) => {
    return `${value.toFixed(0)} ml`;
  };

  return {
    valueFormatter,
  };
};

export default useDroplet;

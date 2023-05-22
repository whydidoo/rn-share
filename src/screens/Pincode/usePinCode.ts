import { useCallback, useState } from 'react';

export const usePinCode = () => {
  const [codes, setCodes] = useState(['', '', '', '']);

  const changeValue = (value: string) => {
    setCodes((prev) => {
      const emptyIndex = prev.indexOf('');
      const newArr = [...prev];
      newArr[emptyIndex] = value;
      return newArr;
    });
  };

  const removeValue = useCallback(() => {
    setCodes((prev) => {
      const emptyIndex = prev.indexOf('');
      const index = emptyIndex === -1 ? 3 : emptyIndex - 1;
      const newArr = [...prev];
      newArr[index] = '';
      return newArr;
    });
  }, []);

  return { changeValue, removeValue, values: codes };
};

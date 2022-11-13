import { useState } from 'react';

const useNumericInput = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (text) => {
    setError('');
    const numericText = text.replace(/[^0-9\.]+/g, '');

    if (numericText !== '' && !/^\d+(\.\d{0,14})?$/.test(numericText)) {
      setError('value is not decimal.');
    }

    setValue(numericText);
  };

  const getInputProps = () => ({
    placeholder,
    returnKeyType: 'done',
    keyboardType: 'numeric',
    value,
    onChangeText: handleChange,
    error,
  });

  return {
    value,
    getInputProps,
    handleChange,
    setError,
  };
};

export default useNumericInput;

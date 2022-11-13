import { useState } from 'react';

const useTextInput = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (text) => {
    setValue(text);
  };

  const getInputProps = () => ({
    placeholder,
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

export default useTextInput;

import { useCallback, useState } from 'react';

export default function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const reset = useCallback(
    (newValue = {}) => {
      setValues(newValue);
    },
    [setValues],
  );

  return { values, handleChange, reset };
}

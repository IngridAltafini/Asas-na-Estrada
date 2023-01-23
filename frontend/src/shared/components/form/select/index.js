import { useRef, useEffect, useCallback, useState } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
import { useTheme } from 'styled-components';

import { Container, Error } from './styles';
import { BiErrorCircle } from 'react-icons/bi';

export const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const theme = useTheme();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState('');

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  };

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.value);
  }, []);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleChange = useCallback(vlr => {
    setValue(vlr);
  }, []);

  useEffect(() => {
    setValue(defaultValue);

    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (ref.state.selectValue.length <= 0) {
          return undefined;
        }

        return ref.state.selectValue[0].value;
      },
    });
  }, [fieldName, registerField, defaultValue]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        styles={style}
        onChange={handleChange}
        value={value}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <BiErrorCircle color={theme.error_title} size={22} />
        </Error>
      )}
    </Container>
  );
};

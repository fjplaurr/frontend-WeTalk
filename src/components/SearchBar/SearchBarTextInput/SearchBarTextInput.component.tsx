import React, { useState, ReactNode } from 'react';
import styles from './SearchBarTextInput.module.scss';

type TextInputProps = {
  type: 'text' | 'email' | 'password';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  minLength?: number;
  children?: ReactNode;
  color?: 'white' | 'smokeWhite';
  idInput: string,
  maxLength: number;
}

const SearchBarTextInput = ({
  type, onChange, placeholder, minLength, children, color = 'smokeWhite', idInput, maxLength,
}: TextInputProps) => {
  const [value, setValue] = useState('');
  const stateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange && onChange(event);
    setValue(event.target.value);
  };
  const inputClass = color === 'white' ? styles.inputWhite : styles.inputSmokeWhite;
  return (
    <div className={styles.textInputWrapper}>
      {children && children}
      <input
        className={inputClass}
        required
        onChange={stateChange}
        value={value}
        type={type}
        minLength={minLength}
        id={idInput}
        maxLength={maxLength}
      />
      <label
        className={styles.label}
        htmlFor={idInput}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default SearchBarTextInput;

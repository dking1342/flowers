import React from 'react';
import styles from '@/app/styles/RadioField.module.sass';

type Props = {
  name: string;
  value: string;
  text: string;
  handleRadioChange: (e: any) => void;
};

const RadioField = ({ name, value, text, handleRadioChange }: Props) => {
  return (
    <div className={styles.radioContainer}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={(e) => handleRadioChange(e)}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};

export default RadioField;

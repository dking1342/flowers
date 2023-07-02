import React from 'react';
import styles from '@/app/styles/CheckboxField.module.sass';

type Props = {
  name: string;
  text: string;
  obj: any;
  handleCheckboxChange: (category: string) => void;
};

const CheckboxField = ({ name, text, obj, handleCheckboxChange }: Props) => {
  return (
    <div className={styles.checkboxContainer}>
      <label htmlFor={name}>{text}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={obj}
        onChange={() => handleCheckboxChange(name)}
      />
    </div>
  );
};

export default CheckboxField;

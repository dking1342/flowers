import React from 'react';
import styles from '@/app/styles/NumberField.module.sass';
import { Montserrat } from 'next/font/google';

type Props = {
  name: string;
  text: string;
  val: any;
  handleNumberChange: (e: any, category: string) => void;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const NumberField = ({ name, text, val, handleNumberChange }: Props) => {
  return (
    <div className={styles.numberContainer}>
      <label htmlFor={name}>{text}</label>
      <input
        type="number"
        name={name}
        value={val}
        min={0}
        max={1000}
        className={montserrat.className}
        onChange={(e) => handleNumberChange(e, name)}
      />
    </div>
  );
};

export default NumberField;

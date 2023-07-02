import React from 'react';
import styles from '@/app/styles/OptionField.module.sass';
import { Montserrat } from 'next/font/google';

type Props = {
  name: string;
  text: string;
  val: string;
  optionList: any;
  handleOptionChange: (e: any, category: string) => void;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const OptionField = ({
  name,
  text,
  val,
  optionList,
  handleOptionChange,
}: Props) => {
  return (
    <div className={styles.optionContainer}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        value={val}
        className={montserrat.className}
        onChange={(e) => handleOptionChange(e, name)}
      >
        <option defaultValue=""></option>
        {optionList.map((item: any) => (
          <option value={item} key={item} className={montserrat.className}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionField;

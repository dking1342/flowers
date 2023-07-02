import { Montserrat } from 'next/font/google';
import React from 'react';
import styles from '@/app/styles/TextField.module.sass';

type Props = {
  name: string;
  text: string;
  val: string;
  handleTextChange: (e: any, category: string) => void;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const TextField = ({ name, text, val, handleTextChange }: Props) => {
  return (
    <div className={styles.textContainer}>
      <label htmlFor={name}>{text}</label>
      <textarea
        // type="text"
        name={name}
        id={name}
        value={val}
        rows={6}
        cols={50}
        className={montserrat.className}
        onChange={(e) => handleTextChange(e, name)}
      />
    </div>
  );
};

export default TextField;

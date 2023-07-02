import React from 'react';
import styles from '@/app/styles/InputField.module.sass';
import { AiOutlineDelete, AiFillPlusCircle } from 'react-icons/ai';
import { Montserrat } from 'next/font/google';

type Props = {
  arr: any;
  name: string;
  text: string;
  type: string;
  category: string;
  handleChange: (e: any, category: string, index: number) => void;
  removeField: (e: any, category: string, index: number) => void;
  addField: (e: any, category: string) => void;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const InputField = ({
  arr,
  name,
  text,
  type,
  category,
  handleChange,
  removeField,
  addField,
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      {arr.map((val: any, i: number) => (
        <div key={i} className={styles.inputLoop}>
          {/* <label htmlFor={name}>{text}</label> */}
          <input
            type={type}
            name={name}
            value={val}
            className={`${styles.input} ${montserrat.className}`}
            onChange={(e) => handleChange(e, category, i)}
          />
          <button
            className={styles.inputBtn}
            onClick={(e) => removeField(e, category, i)}
          >
            <AiOutlineDelete fontSize={25} fill="#ff0000" />
          </button>
        </div>
      ))}
      <button
        className={styles.inputBtn}
        onClick={(e) => addField(e, category)}
      >
        <p>Add new item</p>
        <AiFillPlusCircle fontSize={25} fill="green" />
      </button>
    </div>
  );
};

export default InputField;

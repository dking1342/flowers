import React from 'react';
import styles from '@/app/styles/SelectField.module.sass';
import { AiOutlineDelete, AiFillPlusCircle } from 'react-icons/ai';
import { Montserrat } from 'next/font/google';

type Props = {
  arr: any;
  name: string;
  text: string;
  category: string;
  stateList: any[];
  handleChange: (e: any, category: string, index: number) => void;
  removeField: (e: any, category: string, index: number) => void;
  addField: (e: any, category: string) => void;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const SelectField = ({
  arr,
  name,
  text,
  category,
  stateList,
  handleChange,
  removeField,
  addField,
}: Props) => {
  return (
    <div className={styles.selectContainer}>
      {arr.map((_: any, i: number) => (
        <div key={i} className={styles.selectLoop}>
          {/* <label htmlFor={name}>{text}</label> */}
          <select
            name={name}
            value={arr[i]}
            className={`${styles.select} ${montserrat.className}`}
            onChange={(e) => handleChange(e, category, i)}
          >
            <option defaultValue=""></option>
            {stateList.map((item) => (
              <option value={item} key={item} className={montserrat.className}>
                {item}
              </option>
            ))}
          </select>
          <button
            className={styles.selectBtn}
            onClick={(e) => removeField(e, category, i)}
          >
            <AiOutlineDelete fontSize={25} fill="#ff0000" />
          </button>
        </div>
      ))}
      <button
        className={styles.selectBtn}
        onClick={(e) => addField(e, category)}
      >
        <p>Add new item</p>
        <AiFillPlusCircle fontSize={25} fill="green" />
      </button>
    </div>
  );
};

export default SelectField;

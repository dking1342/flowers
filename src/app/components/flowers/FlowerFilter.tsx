'use client';
import React, { useEffect, useState } from 'react';
import { Flower } from '../../types/flowers';
import styles from '../../styles/FlowerFilter.module.sass';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  data: Flower[];
  retrieveFilter: (filters: UserFilter[]) => void;
};

type SortObj = {
  name: string;
  isActive: boolean;
};
type SortPriceObj = {
  name: string;
  min: number;
  max: number;
  isActive: boolean;
};
export type UserFilter = {
  type: string;
  val: string;
};

const priceArr: SortPriceObj[] = [
  {
    name: '$45 and under',
    min: 0,
    max: 45,
    isActive: false,
  },
  {
    name: '$45 - $60',
    min: 45,
    max: 60,
    isActive: false,
  },
  {
    name: '$60 - $75',
    min: 60,
    max: 75,
    isActive: false,
  },
  {
    name: '$75 - $90',
    min: 75,
    max: 90,
    isActive: false,
  },
  {
    name: 'Above $90',
    min: 90,
    max: 9999,
    isActive: false,
  },
];

const FlowerFilter = ({ data, retrieveFilter }: Props) => {
  const [occasionArr, setOccasionArr] = useState<SortObj[]>([]);
  const [colorArr, setColorArr] = useState<SortObj[]>([]);
  const [flowerArr, setFlowerArr] = useState<SortObj[]>([]);
  const [deliveryArr, setDeliveryArr] = useState<SortObj[]>([]);

  const [initialState, setInitialState] = useState([
    { type: 'occasions', vals: occasionArr },
    { type: 'color', vals: colorArr },
    { type: 'flower', vals: flowerArr },
    { type: 'delivery', vals: deliveryArr },
    { type: 'price', vals: priceArr },
  ]);

  const [filterFlower, setFilterFlower] = useState(initialState);
  const [userFilter, setUserFilter] = useState<UserFilter[]>([]);

  const updateFilter = (list: string, item: string) => {
    setFilterFlower((prev) => {
      let newVals = prev.map((p) => {
        if (p.type === list) {
          p.vals.find((v: any) => {
            if (v.name === item) {
              v.isActive = !v.isActive;
            }
          });
        }
        return p;
      });
      return newVals;
    });
  };

  const resetFilter = () => {
    setFilterFlower(initialState);
  };

  const handleFilterToggle = (e: any) => {
    const ul = e.target.nextSibling;

    if (!ul.style.maxHeight) {
      ul.style.maxHeight = '400px';
    } else {
      ul.style.maxHeight = '';
    }
  };

  useEffect(() => {
    let userFil = filterFlower.reduce((acc: UserFilter[], val) => {
      val.vals.forEach((item: any) => {
        item.isActive && acc.push({ type: val.type, val: item.name });
      });
      return acc;
    }, []);
    setUserFilter(userFil);
  }, [filterFlower]);

  useEffect(() => {
    retrieveFilter(userFilter);
  }, [userFilter, retrieveFilter]);

  useEffect(() => {
    if (data) {
      const occasionList = data.reduce((acc: SortObj[], val) => {
        val.occasion.forEach(
          (occ) =>
            !acc.find((x) => x.name === occ) &&
            acc.push({ name: occ, isActive: false })
        );
        acc = acc.sort((a, b) => (a.name > b.name ? 1 : -1));
        return acc;
      }, []);
      setOccasionArr(occasionList);

      const colorList = data.reduce((acc: SortObj[], val) => {
        val.bouquetDetails.color.forEach(
          (col) =>
            !acc.find((x) => x.name === col) &&
            acc.push({ name: col, isActive: false })
        );
        acc = acc.sort((a, b) => (a.name > b.name ? 1 : -1));
        return acc;
      }, []);
      setColorArr(colorList);

      const flowerList = data.reduce((acc: SortObj[], val) => {
        val.bouquetDetails.bloom.forEach(
          (flo) =>
            !acc.find((x) => x.name === flo) &&
            acc.push({ name: flo, isActive: false })
        );
        acc = acc.sort((a, b) => (a.name > b.name ? 1 : -1));
        return acc;
      }, []);
      setFlowerArr(flowerList);

      const deliveryList = data.reduce((acc: SortObj[], val) => {
        !acc.find((x) => x.name === val.delivery.method) &&
          acc.push({ name: val.delivery.method, isActive: false });
        acc = acc.sort((a, b) => (a.name > b.name ? 1 : -1));
        return acc;
      }, []);
      setDeliveryArr(deliveryList);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        {filterFlower.map((item) => (
          <div key={item.type} className={styles.filterContainer}>
            <button onClick={(e) => handleFilterToggle(e)}>{item.type}</button>
            <ul>
              {item.vals.map((choice) => (
                <li key={choice.name} style={{ color: '#fff' }}>
                  <input
                    type="checkbox"
                    name={choice.name}
                    id={choice.name}
                    value={choice.name}
                    checked={choice.isActive}
                    onChange={() => updateFilter(item.type, choice.name)}
                  />
                  <label htmlFor={choice.name}>{choice.name}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.userFiltersContainer}>
        {userFilter.length ? <h1>user filters</h1> : null}
        <div className={styles.userFilterContainer}>
          {userFilter.map((item) => (
            <button
              key={item.val}
              onClick={() => updateFilter(item.type, item.val)}
            >
              {item.val}{' '}
              <AiOutlineClose fontSize={12} fontStyle={'bold'} color="#000" />
            </button>
          ))}
          {userFilter.length >= 1 && (
            <button onClick={() => resetFilter()}>clear all</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowerFilter;

'use client';
import { Flower } from '@/app/types/flowers';
import React, { useEffect, useState } from 'react';
import FlowerCard from './FlowerCard';
import styles from '../../styles/ShowcaseCards.module.sass';
import globalStyles from '../../styles/home.module.sass';
import ShowcaseLoader from '../loading/ShowcaseLoader';

type Props = {
  data: Flower[];
  sort: string;
  category?: string;
  filter: string;
  limit: number;
};

const ShowcaseCards = ({ data, sort, category, filter, limit }: Props) => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    let arr = data
      .filter((flo) => {
        let isFilter = false;

        for (const key in flo) {
          if (key === sort) {
            let sortObj = flo[key];
            for (const key in sortObj) {
              if (Array.isArray(sortObj)) {
                if (sortObj.includes(filter)) {
                  isFilter = true;
                }
              } else {
                if (key === category!) {
                  if (sortObj[key].includes(filter)) {
                    isFilter = true;
                  }
                }
              }
            }
          }
        }
        return isFilter && flo;
      })
      .slice(0, limit);
    setFlowers(arr);
  }, []);

  return (
    <section className={`${globalStyles.section} ${styles.showcase}`}>
      <h1 className={styles.h1}>shop {filter} flowers</h1>

      {!flowers.length ? (
        <div className={styles.loaderContainer}>
          <ShowcaseLoader />
        </div>
      ) : (
        <>
          <div className={styles.flowersContainer}>
            {flowers.map((flo) => (
              <FlowerCard item={flo} key={flo._id.toString()} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ShowcaseCards;

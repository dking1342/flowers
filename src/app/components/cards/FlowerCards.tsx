'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Flower } from '../../types/flowers';
import FlowerCard from './FlowerCard';
import FlowerFilter, { UserFilter } from '../flowers/FlowerFilter';
import styles from '../../styles/FlowerCards.module.sass';
import Paginate from '../../components/Paginate';

type Props = {
  data: Flower[];
};

const FlowerCards = ({ data }: Props) => {
  const [userSort, setUserSort] = useState<UserFilter[]>([]);
  const retrieveFilter = (filter: UserFilter[]) => setUserSort(filter);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [nextPage, setNextPage] = useState<number | null>(null);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [displayList, setDisplayList] = useState<Flower[]>([]);

  const filterFlower = useCallback(() => {
    const filter = data.filter((item) => {
      let checker = false;
      userSort.forEach((f) => {
        if (f.type === 'color') {
          return item.bouquetDetails.color.includes(f.val) && (checker = true);
        }
        if (f.type === 'flower') {
          return item.bouquetDetails.bloom.includes(f.val) && (checker = true);
        }
        if (f.type === 'delivery') {
          return item.delivery.method === f.val && (checker = true);
        }
        if (f.type === 'occasions') {
          return item.occasion.includes(f.val) && (checker = true);
        }
        if (f.type === 'price') {
          let min = 0;
          let max = 0;
          let range = f.val.split(' ');

          if (range.includes('under')) {
            min = 0;
            max = Number(range[0].slice(1));
          } else if (range.includes('Above')) {
            min = Number(range[1].slice(1));
            max = 9999;
          } else {
            min = Number(range[0].slice(1));
            max = Number(range[2].slice(1));
          }

          item.sizes.find((x) => {
            if (x.price >= min && x.price <= max) {
              return (checker = true);
            }
          });
        }
      });
      return checker && item;
    });
    return filter;
  }, [data, userSort]);

  const paginate = (items: Flower[], page = 1, perPage = 2) => {
    const offset = perPage * (page - 1);
    const totalPages = Math.ceil(items.length / perPage);
    const paginatedItems = items.slice(offset, perPage * page);

    setPrevPage(page - 1 > 0 ? page - 1 : null);
    setNextPage(totalPages > page ? page + 1 : null);
    setTotalItems(items.length);
    setTotalPages(totalPages);
    setDisplayList(paginatedItems);
  };

  useEffect(() => {
    if (totalPages < page) {
      setPage(1);
    }

    if (filterFlower().length < 1 && userSort.length < 1) {
      // setPage(1);
      paginate(data, page, perPage);
    } else {
      paginate(filterFlower(), page, perPage);
    }
  }, [filterFlower, data, userSort, page, perPage, totalPages]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <p>
          {totalItems} {totalItems < 2 ? 'result' : 'results'}
        </p>
        <FlowerFilter data={data} retrieveFilter={retrieveFilter} />
      </div>

      <div className={styles.flowers}>
        {displayList.map((item) => (
          <FlowerCard item={item} key={item._id.toString()} />
        ))}
      </div>
      {totalPages > 0 && (
        <div className={styles.paginate}>
          <Paginate
            prevPage={prevPage}
            totalPages={totalPages}
            page={page}
            nextPage={nextPage}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default FlowerCards;

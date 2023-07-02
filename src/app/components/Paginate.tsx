import React from 'react';
import styles from '@/app/styles/Paginate.module.sass';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

type Props = {
  prevPage: number | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  page: number;
  nextPage: number | null;
};

const Paginate = ({ prevPage, nextPage, setPage, totalPages, page }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.prev}>
        {prevPage && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setPage((prev) => prev - 1);
            }}
          >
            <MdNavigateBefore fontSize={20} fill="#777" />
          </button>
        )}
      </div>
      <div className={styles.pages}>
        <p>Page {page}</p>
        {/* {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setPage((prev) => (prev = i + 1));
            }}
          >
            {i + 1}
          </button>
        ))} */}
      </div>
      <div className={styles.next}>
        {nextPage && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setPage((prev) => prev + 1);
            }}
          >
            <MdNavigateNext fontSize={20} fill="#777" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginate;

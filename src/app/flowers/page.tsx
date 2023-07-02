import React from 'react';
import FlowerCards from '../components/cards/FlowerCards';
import { Metadata } from 'next';
// import { getData } from '../utils/fetch';
import styles from '../styles/FlowerPage.module.sass';
import { prefix } from '../utils/prefix';

type Props = {};

export const metadata: Metadata = {
  title: 'Flower list',
  description: 'List of all the available flowers',
};

const getFlowers = async (url: string) => {
  try {
    const res = await fetch(url, {
      cache: 'no-store',
      // next: { revalidate: 1 },
    });
    return res.ok ? await res.json() : { success: false, error: 'error' };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
};

const url = prefix();
const Flowers = async (props: Props) => {
  const flowers = await getFlowers(`${url.url.API_URL}/flowers/api`);

  return (
    <section className={styles.section}>
      <FlowerCards data={flowers.payload} />
    </section>
  );
};

export default Flowers;

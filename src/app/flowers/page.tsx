import React from 'react';
import FlowerCards from '../components/cards/FlowerCards';
import { Metadata } from 'next';
import { getData } from '../utils/fetch';
import styles from '../styles/FlowerPage.module.sass';
import { prefix } from '../utils/prefix';

type Props = {};

export const metadata: Metadata = {
  title: 'Flower list',
  description: 'List of all the available flowers',
};

const Flowers = async (props: Props) => {
  const url = prefix();
  const flowers = await getData(`${url.url.API_URL}/flowers/api`);
  console.log({ flowers });

  return (
    <section className={styles.section}>
      {JSON.stringify(flowers)}
      <FlowerCards data={flowers.payload} />
    </section>
  );
};

export default Flowers;

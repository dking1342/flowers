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

  return (
    <section className={styles.section}>
      <FlowerCards data={flowers.payload} />
    </section>
  );
};

export default Flowers;

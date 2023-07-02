import Image from 'next/image';
import React from 'react';
import styles from './styles/home.module.sass';
import PromoContainer from './components/PromoContainer';
import { getData } from './utils/fetch';
import ShowcaseCards from './components/cards/ShowcaseCards';
import { prefix } from './utils/prefix';

type Props = {};

const Home = async (props: Props) => {
  const url = prefix();
  const { payload } = await getData(`${url.url.API_URL}/flowers/api`);

  return (
    <main>
      <section className={`${styles.section} ${styles.hero}`}>
        <Image
          src={'/hero.png'}
          alt="hero image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </section>
      <PromoContainer
        image="/promo-1.png"
        header="birthday wishes granted"
        body="give the gift of freshness"
        button="shop for flowers"
        theme="dark"
      />
      <ShowcaseCards
        data={payload}
        sort="occasion"
        // category="bloom"
        filter="birthday"
        limit={4}
      />
      <PromoContainer
        image="/promo-2.png"
        header="get well soon"
        body="lift their spirits with a thoughtful bouquet or plant"
        button="shop for get well flowers"
        theme="light"
      />
      <ShowcaseCards
        data={payload}
        sort="bouquetDetails"
        category="bloom"
        filter="rose"
        limit={4}
      />
    </main>
  );
};

export default Home;

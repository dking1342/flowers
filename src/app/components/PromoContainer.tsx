'use client';
import React from 'react';
import styles from '@/app/styles/PromoContainer.module.sass';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
  image: string;
  header: string;
  body: string;
  button: string;
  theme: 'light' | 'dark';
};

const PromoContainer = ({ image, header, body, button, theme }: Props) => {
  const { push } = useRouter();
  return (
    <section className={`${styles.section} ${styles.promo}`}>
      <div className={styles.imgContainer}>
        <Image
          src={image}
          alt="promo img"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div
        className={`${styles.contentContainer} ${
          theme === 'light' ? styles.lightMode : styles.darkMode
        }`}
      >
        <h1>{header}</h1>
        <p>{body}</p>
        <button onClick={() => push('/flowers')}>{button}</button>
      </div>
    </section>
  );
};

export default PromoContainer;

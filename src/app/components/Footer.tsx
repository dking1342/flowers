import React from 'react';
import styles from '@/app/styles/Footer.module.sass';

type Props = {};

const Footer = (props: Props) => {
  const getYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {getYear} | Acme Flowers, Inc.</p>
    </footer>
  );
};

export default Footer;

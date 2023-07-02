import { Metadata } from 'next';
import React from 'react';
import RegisterUser from '../components/auth/RegisterUser';
import styles from '@/app/styles/Auth.module.sass';

type Props = {};

export const metadata: Metadata = {
  title: 'Create a new account',
};

const Register = (props: Props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>register</h1>
      <RegisterUser />
    </section>
  );
};

export default Register;

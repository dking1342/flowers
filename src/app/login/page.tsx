import { Metadata } from 'next';
import React from 'react';
import LoginUser from '../components/auth/LoginUser';
import styles from '@/app/styles/Auth.module.sass';

type Props = {};

export const metadata: Metadata = {
  title: 'Sign into your account',
};

const Login = (props: Props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>sign in</h1>
      <LoginUser />
    </section>
  );
};

export default Login;

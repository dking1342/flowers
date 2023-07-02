'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from '@/app/styles/Auth.module.sass';
import Link from 'next/link';
import { prefix } from '../../utils/prefix';

type Props = {};

const LoginUser = (props: Props) => {
  const { push, refresh } = useRouter();
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMsg('');

    const payload = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.pwd.value,
    };
    const url = prefix();
    fetch(`${url.url.API_URL}/login/api`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        let data = await res.json();
        if (data.success) {
          push('/admin');
          refresh();
        } else {
          setErrorMsg('Unable to login. Please try again');
        }
      })
      .catch((error) => {
        setErrorMsg('Unable to login. Please try again');
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <div className={styles.formGroup}>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder=" "
        />
        <label htmlFor="username" className={styles.floatLabel}>
          username
        </label>
      </div>
      <div className={styles.formGroup}>
        <input type="password" id="pwd" name="pwd" required placeholder=" " />
        <label htmlFor="pwd" className={styles.floatLabel}>
          password
        </label>
      </div>
      <button className={styles.btn} type="submit">
        sign into your account
      </button>
      {errorMsg && <small style={{ color: '#ff0000' }}>{errorMsg}</small>}
      <p>
        Need an account?{' '}
        <Link className={styles.link} href={'/register'}>
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginUser;

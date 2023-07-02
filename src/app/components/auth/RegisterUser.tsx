'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from '../../styles/Auth.module.sass';
import Link from 'next/link';
import { prefix } from '../../utils/prefix';

type Props = {};

const RegisterUser = (props: Props) => {
  const { push } = useRouter();
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMsg('');

    let pwd = e.currentTarget.pwd.value;
    let pwd2 = e.currentTarget.repwd.value;

    if (pwd === pwd2) {
      const payload = {
        username: e.currentTarget.username.value,
        password: pwd,
      };

      const url = prefix();
      fetch(`${url.url.API_URL}/register/api`, {
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
            push('/');
          } else {
            setErrorMsg('Unable to register. Please try again');
          }
        })
        .catch((error) => {
          setErrorMsg('Unable to register. Please try again');
        });
    } else {
      setErrorMsg('Unable to register. Please try again');
    }
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
      <div className={styles.formGroup}>
        <input
          type="password"
          id="repwd"
          name="repwd"
          required
          placeholder=" "
        />
        <label htmlFor="repwd" className={styles.floatLabel}>
          re-enter password
        </label>
      </div>
      <button type="submit" className={styles.btn}>
        create an account
      </button>
      {errorMsg && <small style={{ color: '#ff0000' }}>{errorMsg}</small>}
      <p>
        Already have an account?
        <Link href={'/login'} className={styles.link}>
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterUser;

import { Metadata } from 'next';
import React from 'react';
import FlowerForm from '@/app/components/flowers/FlowerForm';
import { getData } from '@/app/utils/fetch';
import styles from '@/app/styles/FlowerForm.module.sass';
import { prefix } from '../../utils/prefix';

type Props = {};

export const metadata: Metadata = {
  title: 'Edit flower item',
};

const AdminEdit = async (props: Props) => {
  const url = prefix();
  const get = await getData(`${url.url.API_URL}/flowers/api`);

  return (
    <section className={styles.section}>
      <FlowerForm name="edit" data={get} />
    </section>
  );
};

export default AdminEdit;

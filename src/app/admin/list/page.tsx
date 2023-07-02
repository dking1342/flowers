import { prefix } from '../../utils/prefix';
import FlowerCards from '../../components/cards/FlowerCards';
import { getData } from '../../utils/fetch';
import { Metadata } from 'next';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'Admin Flower list',
  description: 'List of all the available flowers',
};

const AdminList = async (props: Props) => {
  const url = prefix();
  const flowers = await getData(`${url.url.API_URL}/flowers/api`);

  return (
    <section>
      <FlowerCards data={flowers.payload} />
    </section>
  );
};

export default AdminList;

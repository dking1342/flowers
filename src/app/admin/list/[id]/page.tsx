import { Metadata } from 'next';
import React from 'react';
import FlowerItemPage from '@/app/components/flowers/FlowerItemPage';
import { prefix } from '../../../utils/prefix';
import { getData } from '../../../utils/fetch';

type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Flower Page',
  description: 'Page for the individual flower',
};

const url = prefix();

const getFlowers = async (id: string) => {
  try {
    const res = await fetch(`${url.url.API_URL}/flowers/${id}/api`, {
      cache: 'no-store',
      next: { revalidate: 1 },
    });
    return res.ok ? await res.json() : { error: 'not found' };
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
};

const AdminFlowerItem = async ({ params }: Props) => {
  // const res = await getFlowers(params.id);
  const res = await getData(`${url.url.API_URL}/flowers/${params.id}/api`);

  return (
    <section>
      <FlowerItemPage item={res.payload} />
    </section>
  );
};

export default AdminFlowerItem;

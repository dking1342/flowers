import React from 'react';
import { Metadata } from 'next';
import FlowerItemPage from '../../components/flowers/FlowerItemPage';
import { prefix } from '../../utils/prefix';

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

const getFlower = async (id: string) => {
  try {
    const res = await fetch(`${url.url.API_URL}/flowers/${id}/api`, {
      cache: 'no-store',
    });
    return res.ok ? await res.json() : { error: 'not found' };
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
};

const FlowerItem = async ({ params }: Props) => {
  const res = await getFlower(params.id);

  return (
    <section>
      <FlowerItemPage item={res.payload} />
    </section>
  );
};

export default FlowerItem;

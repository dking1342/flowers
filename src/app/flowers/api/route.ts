import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Flower from '@/app/models/Flower';

export const GET = async () => {
  try {
    await dbConnect();
    const data = await Flower.find({});

    return NextResponse.json({ status: 200, payload: data });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message });
  }
};

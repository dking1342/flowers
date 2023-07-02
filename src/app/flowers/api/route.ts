import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Flower from '@/app/models/Flower';

export const GET = async (request: Request) => {
  try {
    await dbConnect();
    const data = await Flower.find({}).populate('bouquetDetails');

    return NextResponse.json({ success: true, payload: data }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
};

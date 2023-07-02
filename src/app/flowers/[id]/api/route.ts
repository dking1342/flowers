import { NextRequest, NextResponse } from 'next/server';
import { ResponseType } from '../../../types/responses';
import dbConnect from '../../../lib/mongodb';
import Flower from '@/app/models/Flower';

// const responseDefault: ResponseType<Flower[]> = {
//   success: true,
//   status: 200,
//   message: '',
//   payload: [],
//   error: null,
// };

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();
    const url = request.url;
    const params = url.split('/').slice(-2, -1)[0];

    const flower = await Flower.findById(params).populate('creator');
    return NextResponse.json({ payload: flower });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message });
  }
};

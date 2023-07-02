import { NextRequest, NextResponse } from 'next/server';
import Flower from '@/app/models/Flower';
import dbConnect from '@/app/lib/mongodb';

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();
    const url = request.url;
    const params = url.split('/').slice(-2, -1)[0].slice(3);

    const flower = await Flower.findById(params).populate('bouquetDetails');
    return NextResponse.json(
      { success: true, payload: flower },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 }
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = request.url.split('/').slice(-2, -1)[0];
    const flower = await Flower.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, payload: flower },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 }
    );
  }
};

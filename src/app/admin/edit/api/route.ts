import dbConnect from '@/app/lib/mongodb';
import Flower from '@/app/models/Flower';
import { NextRequest, NextResponse } from 'next/server';
import { Flower as FlowerType } from '@/app/types/flowers';

export const PUT = async (req: NextRequest) => {
  try {
    await dbConnect();

    const body: FlowerType = await req.json();
    const bodyStringified = JSON.stringify(body);
    const bodyParsed = JSON.parse(bodyStringified);

    const flower = await Flower.findByIdAndUpdate(
      bodyParsed.id,
      bodyParsed.payload
    );
    return NextResponse.json(
      { success: true, payload: flower },
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 }
    );
  }
};

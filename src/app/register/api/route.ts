import { NextRequest, NextResponse } from 'next/server';
import Staff from '@/app/models/Staff';
import dbConnect from '@/app/lib/mongodb';
import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { username, password } = await req.json();
    let existingUser = await Staff.findOne({ username });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          payload: 'user already registered',
        },
        { status: 400 }
      );
    } else {
      let hash = bcrypt.hashSync(password, 10);
      let registerdUser = await Staff.create({ username, password: hash });
      return NextResponse.json(
        { success: true, payload: registerdUser },
        { status: 201 }
      );
    }
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, payload: err.message },
      { status: 400 }
    );
  }
};

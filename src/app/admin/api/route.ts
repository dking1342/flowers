import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { COOKIE_NAME } from '@/app/constants';
import { verify } from 'jsonwebtoken';

export const GET = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return NextResponse.json(
      { success: false, payload: 'unauthorized' },
      { status: 403 }
    );
  }
  const { value } = token;

  try {
    // const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET_LOCAL;
    verify(value, ACCESS_TOKEN!);
    return NextResponse.json(
      { success: true, payload: 'cookie' },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, payload: err.message });
  }
};

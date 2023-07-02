import { COOKIE_NAME, LOGOUT_AGE } from '@/app/constants';
import dbConnect from '@/app/lib/mongodb';
import Staff from '@/app/models/Staff';
import { createAccessToken } from '@/app/utils/auth';
import { prefix } from '../../utils/prefix';
import { serialize } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const checkUser = await Staff.findOne({ username: 'admin' });

    if (checkUser !== null) {
      let { username, password: pw, _id: id } = checkUser;
      const accessToken = createAccessToken(checkUser);
      let newTokenUser = {
        _id: id,
        username,
        password: pw,
        token: accessToken,
      };
      await Staff.findOneAndUpdate({ _id: id }, newTokenUser, {
        new: true,
        useFindAndModify: false,
      });

      let serializer = serialize(COOKIE_NAME, accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: LOGOUT_AGE,
        path: '/',
      });
      // const url = prefix();
      // return NextResponse.redirect(`${url.url.API_URL}/`, {
      //   headers: { 'Set-Cookie': serializer },
      // });
      return NextResponse.json(
        { success: true, payload: JSON.stringify(serializer) },
        { status: 200, headers: { 'Set-Cookie': serializer } }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          payload: 'bad request',
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    const err = error as Error;
    console.log({ err });
    return NextResponse.json(
      { success: false, payload: err.message },
      { status: 400 }
    );
  }
};

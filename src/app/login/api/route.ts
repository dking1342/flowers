import dbConnect from '@/app/lib/mongodb';
import Staff from '@/app/models/Staff';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createAccessToken, createRefreshToken } from '@/app/utils/auth';
import { serialize } from 'cookie';
import { COOKIE_NAME, MAX_AGE } from '@/app/constants';

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { username, password } = await req.json();
    const checkUser = await Staff.findOne({ username: username });

    if (checkUser !== null) {
      let { username, password: pw, _id: id } = checkUser;
      if (bcrypt.compareSync(password, pw)) {
        const accessToken = createAccessToken(checkUser);
        // const refreshToken = createRefreshToken(checkUser);

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
        // let responseUser = {
        //   _id: tokenUser._id,
        //   username: tokenUser.username,
        //   password: tokenUser.password,
        //   token: tokenUser.token,
        // };

        let serializer = serialize(COOKIE_NAME, accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: MAX_AGE,
          path: '/',
        });

        return NextResponse.json(
          { success: true, payload: JSON.stringify(serializer) },
          { status: 200, headers: { 'Set-Cookie': serializer } }
        );
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          payload: 'user does not exist',
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, payload: 'bad request' },
      { status: 400 }
    );
  }
};

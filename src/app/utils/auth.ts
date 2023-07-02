import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { ACCESS_TOKEN_EXPIRES, REFRESH_TOKEN_EXPIRES } from '../constants';

// const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
// const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET_LOCAL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET_LOCAL;

export const createAccessToken = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    ACCESS_TOKEN!,
    {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    }
  );
};

export const createRefreshToken = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    REFRESH_TOKEN!,
    {
      expiresIn: REFRESH_TOKEN_EXPIRES,
    }
  );
};

export const isAuth = (req: any, res: NextResponse, next: any) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7);
    jwt.verify(token, ACCESS_TOKEN!, (err: any, decode: any) => {
      if (err) {
        NextResponse.json({ success: false, payload: 'invalid token' });
      } else {
        req.user = decode;
        next();
      }
    });
  }
};

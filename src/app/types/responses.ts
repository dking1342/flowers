import { Flower } from './flowers';

export type ResponseType<T> = {
  success: boolean;
  status: number;
  message: string;
  payload: T;
  error: string | null;
};

export const ResponseDefault: ResponseType<Flower[]> = {
  success: true,
  status: 200,
  message: '',
  payload: [],
  error: null,
};

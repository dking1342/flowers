import { Types } from 'mongoose';

type FlowerDelivery = {
  // method: 'florist-to-door' | 'farm-to-door' | 'shipped in a box' | '';
  method: string;
  date: number;
};

type FlowerSizeImage = {
  id: string;
  hero: string;
  thumbnail: string;
};

export type FlowerSizeImageDemo = {
  hero: string;
  thumbnail: string;
};

type FlowerSale = {
  isSale: boolean;
  discount: number;
};

export type FlowerBouquetDetails = {
  bloom: string[];
  color: string[];
  name: string;
  isBouquet: boolean;
};

type FlowerAvailability = {
  isSoldOut: boolean;
  isLimited: boolean;
  isFull: boolean;
};

export type FlowerSize = {
  _id?: string;
  id: string;
  name: 'standard' | 'deluxe' | 'premium' | 'exquisite';
  quantity: number;
  price: number;
  height: number;
  width: number;
  images: FlowerSizeImage[];
};

export type FlowerSizeDemo = {
  // name: 'standard' | 'deluxe' | 'premium' | 'exquisite';
  name: string;
  quantity: number;
  price: number;
  height: number;
  width: number;
  images: FlowerSizeImageDemo[];
};

export type Flower = {
  _id: Types.ObjectId;
  bouquetDetails: FlowerBouquetDetails;
  description: string;
  promoImg: string;
  isAvailable: FlowerAvailability;
  sale: FlowerSale;
  delivery: FlowerDelivery;
  occasion: string[];
  sizes: FlowerSize[];
};

export type FlowerDemo = {
  bouquetDetails: FlowerBouquetDetails;
  description: string;
  promoImg: string;
  isAvailable: FlowerAvailability;
  sale: FlowerSale;
  delivery: FlowerDelivery;
  occasion: string[];
  sizes: FlowerSizeDemo[];
};

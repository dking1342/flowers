import mongoose from 'mongoose';
import { FlowerDemo } from '../types/flowers';
import { Model } from 'mongoose';

const { Schema } = mongoose;

const FlowerBouquetSchema = new Schema({
  bloom: [String],
  color: [String],
  name: [String],
  isBouquet: Boolean,
});

const FlowerAvailabilitySchema = new Schema({
  isSoldOut: Boolean,
  isLimited: Boolean,
  isFull: Boolean,
});

const FlowerSaleSchema = new Schema({
  isSale: Boolean,
  discount: Number,
});

const FlowerDeliverySchema = new Schema({
  method: String,
  date: Number,
});

const FlowerSizeImgSchema = new Schema({
  id: String,
  hero: String,
  thumbnail: String,
});

const FlowerSizeSchema = new Schema({
  id: String,
  name: String,
  quantity: Number,
  price: Number,
  height: Number,
  width: Number,
  images: [FlowerSizeImgSchema],
});

const FlowerSchema = new Schema<FlowerDemo>(
  {
    bouquetDetails: FlowerBouquetSchema,
    description: String,
    promoImg: String,
    isAvailable: FlowerAvailabilitySchema,
    sale: FlowerSaleSchema,
    delivery: FlowerDeliverySchema,
    occasion: [String],
    sizes: [FlowerSizeSchema],
  },
  {
    timestamps: true,
  }
);

let Flower: Model<any>;
if (mongoose.models.Flower) {
  Flower = mongoose.model('Flower');
} else {
  Flower = mongoose.model('Flower', FlowerSchema);
}
export default Flower;

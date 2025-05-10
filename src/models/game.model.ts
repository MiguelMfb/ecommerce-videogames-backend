import mongoose, { Schema, Document } from 'mongoose';

interface GamePurchaseOptionPlatform {
  platformName: string;
  platformId: string;
  priceCOP: number;
  stock: number;
}

interface GamePurchaseOption {
  acquisitionType: string;
  platforms: GamePurchaseOptionPlatform[];
}

export interface Game extends Document {
  slug: string;
  title: string;
  coverImageUrl: string;
  trailerEmbedUrl?: string;
  synopsis: string;
  platforms: string[];
  genre: string;
  originalPriceCOP?: number;
  currentPriceCOP: number;
  offerEndsAt?: Date;
  releaseDate?: Date;
  developer?: string;
  publisher?: string;
  rating?: string;
  tags?: string[];
  isBundleOnly: boolean;
  purchaseOptions?: GamePurchaseOption[];
  partOfBundles?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const GameSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    coverImageUrl: { type: String, required: true },
    trailerEmbedUrl: { type: String },
    synopsis: { type: String, required: true },
    platforms: { type: [String], required: true },
    genre: { type: String, required: true },
    originalPriceCOP: { type: Number },
    currentPriceCOP: { type: Number, required: true },
    offerEndsAt: { type: Date },
    releaseDate: { type: Date },
    developer: { type: String },
    publisher: { type: String },
    rating: { type: String },
    tags: { type: [String] },
    isBundleOnly: { type: Boolean, required: true },
    purchaseOptions: { type: Array },
    partOfBundles: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model<Game>('Game', GameSchema);

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string; // Asegúrate de que aquí se usa MONGO_URI
    await mongoose.connect(uri, { dbName: 'TaimyStore' });
    console.log('MongoDB connected to TaimyStore');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

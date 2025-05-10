import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://taimystore:0JdY0XVQX3D1MWf3@cluster0.hs1gjee.mongodb.net/TaimyStore?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(uri, { dbName: 'TaimyStore' });
    console.log('MongoDB connected to TaimyStore');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

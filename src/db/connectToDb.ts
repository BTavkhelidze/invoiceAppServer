import 'dotenv/config';
import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://beqatavkhelidze4:${process.env.DB_SECRET}@invoice.admzn.mongodb.net/?retryWrites=true&w=majority&appName=invoice`
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};
